# LangGraph

## 📖 什么是 LangGraph？

**LangGraph** 是 LangChain 团队推出的、用于构建**有状态、多参与者（Multi-Agent）** LLM 应用的底层编排框架。它把大模型应用抽象成一张**图（Graph）**，通过 **节点（Node）**、**边（Edge）**、**状态（State）** 三要素来精确控制程序的执行流程。

它是 `LangChain` 的进阶补充：如果说 `LangChain` 的 LCEL 擅长把"检索 → Prompt → LLM"串成一条**直线管道**，那么 `LangGraph` 就是为了解决 LCEL 搞不定的场景：

*   **循环与回流**：让模型反复调用工具、自我修正，直到满足停止条件。
*   **条件分支**：根据上一步结果动态决定下一步走哪个节点。
*   **状态持久化**：记住多轮对话 / 任务历史，支持暂停、恢复。
*   **人机协同（Human-in-the-loop）**：在关键节点停下来等人工确认。
*   **多 Agent 协作**：多个智能体并行或按流程互相调用。

**LangGraph 核心流程：**

```text
定义状态 State  ->  定义节点 Node(函数)  ->  连接边 Edge  ->  compile 编译成图  ->  invoke 运行
```

---

## 🛠️ 准备工作

### 1. 环境搭建
建议在 `LangChain` 教学环境（Python 3.9 - 3.11）基础上，额外安装 `langgraph`。

```bash
# 进入已有虚拟环境 (可选)
source rag_env/bin/activate  # Mac/Linux
rag_env\Scripts\activate     # Windows

# 安装核心依赖
pip install langgraph langchain-openai langchain-core
```

### 2. 配置 API Key
与上一个教程一致，这里以 OpenAI 为例（可平替通义千问、智谱等）。

```python
import os
os.environ["OPENAI_API_KEY"] = "sk-xxxxxxxxxxxxxxxxxxxxxxxx"
```

---

## 🧱 三大核心概念

在学习写代码之前，先理解 LangGraph 的三个基石：

| 概念 | 作用 | 类比 |
|------|------|------|
| **State（状态）** | 在整个图中流转的共享数据结构，通常是一个 `TypedDict` | 一个贯穿全局的"共享黑板" |
| **Node（节点）** | 一个 Python 函数，接收 State、返回对 State 的**部分更新** | 一个个"工序/工人" |
| **Edge（边）** | 连接节点，决定执行顺序；条件边根据结果动态路由 | 工序间的"流水线传送带" |

> 💡 **核心机制**：每个节点只返回它想更新的那部分字段（而不是整个 State），LangGraph 会按字段的 `reducer`（累加器）自动合并。例如 `messages` 字段用 `add_messages` 累加，就会像聊天记录一样"追加"而不是"覆盖"。

---

## 💻 详细代码实现步骤

### 第一步：一行代码体验 Agent 的魅力

在手动搭建图之前，先用 LangGraph 预置的 `create_react_agent` 快速体验一下"会调用工具"的智能体。

```python
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

# 1. 初始化大模型
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# 2. 定义一个工具函数 (用 @tool 装饰器声明)
from langchain_core.tools import tool

@tool
def multiply(a: int, b: int) -> int:
    """两个数相乘。"""
    return a * b

@tool
def add(a: int, b: int) -> int:
    """两个数相加。"""
    return a + b

tools = [multiply, add]

# 3. 一行代码创建 Agent (内部就是一张含循环的 LangGraph 图)
agent = create_react_agent(llm, tools)

# 4. 提问 — 模型会自动决定调用哪些工具
response = agent.invoke({"messages": [("user", "3 乘以 4 再加 5 等于多少？")]})

# 5. 打印最终回答
print(response["messages"][-1].content)
```

---

### 第二步：手动定义状态 (State)

要理解 LangGraph 底层原理，我们从零搭一张图。首先是状态定义。

```python
from typing import Annotated, TypedDict
from langgraph.graph.message import add_messages

class State(TypedDict):
    """
    图的状态：所有节点共享，并在节点间流转。
    Annotated[list, add_messages] 表示 messages 字段用 add_messages 累加
    —— 每次节点返回新消息时，是"追加"到历史里，而不是"覆盖"。
    """
    messages: Annotated[list, add_messages]
```

---

### 第三步：定义节点 (Node)

节点就是普通函数：入参是整个 State，出参是**要更新的那部分字段**（字典）。

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def chatbot(state: State):
    """节点1：调用 LLM，返回新的 AI 消息。"""
    return {"messages": [llm.invoke(state["messages"])]}
```

---

### 第四步：组装图 (Graph) 并运行

```python
from langgraph.graph import StateGraph, START, END

# 1. 用 State 构建图骨架
graph_builder = StateGraph(State)

# 2. 添加节点
graph_builder.add_node("chatbot", chatbot)

# 3. 连接边：START -> chatbot -> END
graph_builder.add_edge(START, "chatbot")
graph_builder.add_edge("chatbot", END)

# 4. 编译成可执行图
graph = graph_builder.compile()

# 5. 运行
result = graph.invoke({"messages": [("user", "你好，请介绍一下你自己")]})
print(result["messages"][-1].content)
```

---

### 第五步：条件分支 (Conditional Edges)

核心亮点来了。我们可以根据状态决定下一步走哪条边——比如实现一个"工具调用路由"。

```python
from typing import Literal
from langgraph.graph import StateGraph, START, END

def route_tools(state: State) -> Literal["tools", "end"]:
    """
    路由函数：检查最后一条消息是否发起了工具调用。
    返回字符串，表示下一个要去的节点名；END 用 "end" 表示。
    """
    last_message = state["messages"][-1]
    if getattr(last_message, "tool_calls", None):
        return "tools"     # 有工具调用 -> 走去 tools 节点
    return "end"           # 否则 -> 直接结束

graph_builder = StateGraph(State)
graph_builder.add_node("chatbot", chatbot)
graph_builder.add_node("tools", tool_node)  # tool_node 为工具执行节点

graph_builder.add_edge(START, "chatbot")

# 关键：添加条件边，根据 route_tools 的返回值决定走向
graph_builder.add_conditional_edges(
    "chatbot",
    route_tools,
    {"tools": "tools", "end": END}   # 路由返回值 -> 目标节点 的映射
)

graph_builder.add_edge("tools", "chatbot")  # 工具执行完，回到 chatbot 继续思考
graph = graph_builder.compile()
```

这个结构就是 `create_react_agent` 内部真实的图结构：**chatbot ⇄ tools 之间形成循环**，直到模型不再调用工具才结束。

---

### 第六步：多轮记忆 (Checkpointer 持久化)

默认的图是"无记忆"的，每次 `invoke` 都是全新会话。给图挂上 `Checkpointer`，就能按 `thread_id` 保存对话历史，实现多轮对话。

```python
from langgraph.checkpoint.memory import InMemorySaver   # 新版推荐
# 旧版为: from langgraph.checkpoint.memory import MemorySaver

memory = InMemorySaver()
graph = graph_builder.compile(checkpointer=memory)

# 同一个 thread_id 下的多次调用会共享历史
config = {"configurable": {"thread_id": "conversation-1"}}

graph.invoke({"messages": [("user", "我叫小明")]}, config)
result = graph.invoke({"messages": [("user", "我叫什么名字？")]}, config)
print(result["messages"][-1].content)   # 模型会记得你叫"小明"
```

---

### 第七步：人机协同 (Human-in-the-loop)

在关键节点前"暂停"，等人确认后再继续。用 `interrupt_before` 指定要在哪个节点前暂停。

```python
from langgraph.checkpoint.memory import InMemorySaver
from langgraph.types import Command

memory = InMemorySaver()
graph = graph_builder.compile(checkpointer=memory, interrupt_before=["tools"])

config = {"configurable": {"thread_id": "1"}}

# 第一次运行：会在 "tools" 节点前停下来
result = graph.invoke(
    {"messages": [("user", "帮我查询今天的天气")]},
    config,
)
print("已暂停，等待人工确认是否调用工具...")

# 人工确认后，用 Command(resume=...) 恢复执行
graph.invoke(Command(resume=True), config)
```

---

### 第八步：可视化检查图结构

LangGraph 能把编译好的图转成 Mermaid 代码，方便可视化调试。

```python
# 输出 Mermaid 图，可粘贴到 mermaid.live 或支持 Mermaid 的笔记中查看
print(graph.get_graph().draw_mermaid())
```

---

## 🌟 进阶优化方案 (从 Demo 到生产级)

### 1. 多 Agent 协作
*   **监督者模式（Supervisor）**：一个"主管" Agent 负责把任务分派给多个"专家" Agent。
*   **图嵌套**：一个图可以作为一个节点嵌入到另一个图中（`add_node` 传入已编译的 graph）。
*   官方高阶教程推荐使用 `langgraph-supervisor` 库实现。

### 2. 流式输出 (Streaming)
让回复"逐字"吐出来，而不是等全部生成完：

```python
for chunk in graph.stream({"messages": [("user", "讲个笑话")]}, stream_mode="messages"):
    print(chunk[0].content, end="", flush=True)
```

### 3. 超时与重试控制
*   给节点配置重试：`add_node("x", fn, retry=RetryPolicy(max_attempts=3))`
*   添加超时：在 `.compile()` 后配合 `with_timeout()` 或异步 `ainvoke` 控制。

### 4. 持久化升级
*   演示用 `InMemorySaver`（内存态，重启丢失）。
*   生产环境换 `SqliteSaver` / `PostgresSaver`，把对话状态存到数据库。

### 5. 与 LangChain 结合
*   可以把上一个 RAG 教程的 `rag_chain` 直接作为 LangGraph 里的一个节点，从而给 RAG 加上"记忆""循环""条件路由"等能力。

---

## 📁 完整目录结构参考

```text
my_langgraph_project/
│
├── .env                     # 环境变量(API Keys)
├── requirements.txt         # 依赖包列表
├── agent_quickstart.py      # 第一步：create_react_agent 快速体验
├── graph_basic.py           # 第二~四步：手写 State/Node/Edge
├── graph_conditional.py     # 第五步：条件分支与工具循环
├── graph_memory.py          # 第六步：Checkpointer 多轮记忆
├── graph_hilt.py            # 第七步：Human-in-the-loop
└── main.py                  # 整合示例
```

---

## 📚 总结

LangGraph 的学习曲线比 LangChain 稍陡，因为它把"控制流"完全交给了你（State / Node / Edge）。但一旦掌握它：

*   你能精确表达 **Agent 循环**、**条件路由**、**并行分支** 等复杂流程，
*   通过 `Checkpointer` 和 `interrupt` 天然获得 **记忆** 与 **人机协同** 能力，
*   是当前构建 **生产级 Multi-Agent 系统** 的主流选择。

建议按本教程顺序动手：先用 `create_react_agent` 建立直觉，再逐行手写一张图，最后叠加记忆与人机协同，就能覆盖 90% 的实战场景。