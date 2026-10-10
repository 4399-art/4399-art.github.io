# 智慧图书馆座位预约系统

> 前后端分离的 AI 座位/空间预约平台，集成 LangGraph AI 智能助手与 RAG 知识库

## 项目简介

本项目是一个面向图书馆/自习室场景的**智慧座位预约系统**，采用前后端分离架构，支持座位级/区域级预约、可视化时间轴选座、AI 对话式预约、RAG 知识库问答等功能。项目使用 Docker 一键部署，具备生产级别的代码分层与工程规范。

## 技术栈

| 层级 | 技术选型 |
|------|----------|
| **前端** | Vue 3 + Vite + Element Plus + Vue Router + Axios |
| **后端** | FastAPI + Uvicorn + SQLAlchemy 2.0 + Pydantic v2 |
| **数据库** | MySQL + PyMySQL |
| **AI 框架** | LangChain + LangGraph + OpenAI SDK |
| **向量数据库** | ChromaDB |
| **认证** | JWT (PyJWT) + bcrypt 密码加密 |
| **部署** | Docker Compose + Nginx 反向代理 |

---

## 核心代码详解

### 1. 容量冲突检测算法

预约系统的核心难点在于**时间段重叠的容量计算**。系统将一天的时间轴按所有预约的起止时间切分为若干"临界分段"，逐段统计占用量，精确判断新预约是否超限。

```python
# backend/app/service/reservation_service.py
def _check_capacity(db, space_id, date, start_time, end_time, headcount, exclude_id=None):
    """容量冲突检测：基于时间轴的临界分段算法"""
    space = db.query(Space).filter(Space.id == space_id).first()
    capacity = space.capacity
    existing = db.query(Reservation).filter(
        Reservation.space_id == space_id,
        Reservation.date == date,
        Reservation.status.in_([ReservationStatus.PENDING, ReservationStatus.APPROVED]),
    ).all()
    # 收集临界时间点，逐段统计占用量
    critical = {_time_to_min(start_time), _time_to_min(end_time)}
    for r in existing:
        if r.start_time < end_time and r.end_time > start_time:
            critical.add(_time_to_min(r.start_time))
            critical.add(_time_to_min(r.end_time))
    max_occupied = 0
    for t in sorted(critical):
        if t <= _time_to_min(start_time) or t >= _time_to_min(end_time):
            continue
        occupied = headcount
        for r in existing:
            if _time_to_min(r.start_time) <= t < _time_to_min(r.end_time):
                occupied += r.headcount or 1
        max_occupied = max(max_occupied, occupied)
    if max_occupied > capacity:
        raise BusinessException(message=f"该时段容量不足")
```

**设计要点：**
- 使用**临界时间点切分法**，将连续时间轴离散化为若干段，每段内占用量恒定
- 支持 `headcount`（多人预约），区域级预约可占多个名额
- 座位级预约单独走 `_check_seat_conflict`，检查具体座位的时间重叠

---

### 2. LangGraph AI Agent 对话预约

系统通过 LangGraph 构建**状态图驱动的 AI Agent**，用户可用自然语言完成预约。Agent 自动编排工具调用、注入用户身份、处理多轮对话。

```python
# backend/app/langgraph/graph.py
def agent_node(state: AgentState) -> dict:
    """Agent 决策节点：LLM 根据对话历史决定下一步动作"""
    llm = _build_llm().bind_tools(ALL_TOOLS)
    messages = [SystemMessage(content=SYSTEM_PROMPT)] + list(state.get("messages", []))
    if state.get("user_id") is not None:
        messages.append(SystemMessage(content=f"[当前用户 user_id={state['user_id']}]"))
    return {"messages": [llm.invoke(messages)]}

def should_continue(state: AgentState) -> str:
    """条件边：LLM 是否调用了工具？"""
    last = state["messages"][-1]
    return "tools" if isinstance(last, AIMessage) and last.tool_calls else END

def build_agent_graph():
    """构建状态图：agent ⇄ tools 循环"""
    workflow = StateGraph(AgentState)
    workflow.add_node("agent", agent_node)
    workflow.add_node("tools", tools_node)
    workflow.set_entry_point("agent")
    workflow.add_conditional_edges("agent", should_continue, {"tools": "tools", END: END})
    workflow.add_edge("tools", "agent")
    return workflow.compile()
```

**Agent 工具集：**

| 工具 | 功能 |
|------|------|
| `get_date_info` | 获取真实日期（禁止 LLM 编造日期） |
| `list_spaces` | 列出开放区域 |
| `get_space_detail` | 区域详情 + 座位列表 |
| `check_seat_availability` | 容量/座位可用性检查 |
| `create_reservation` | 创建预约 |
| `cancel_reservation` | 取消预约 |
| `list_my_reservations` | 查询我的预约 |
| `rag_search` | 知识库检索 |

**核心设计：**
- **user_id 自动注入**：在 `tools_node` 中拦截工具调用，自动填充当前用户身份
- **System Prompt 工程**：明确定义容量模型、预约流程、冲突回答模板
- **参数锁定策略**：对话历史中出现过的 space_id/日期/时间直接沿用，减少交互轮次

---

### 3. RAG 知识库检索

基于 ChromaDB 向量数据库实现**检索增强生成（RAG）**，AI 可基于用户上传的文档回答规则类问题。

```python
# backend/app/rag/chain.py
def build_rag_chain():
    """构建 RAG 链：检索 → 拼上下文 → LLM 生成"""
    llm = ChatOpenAI(api_key=settings.LLM_API_KEY, model=settings.LLM_MODEL)
    retriever = get_vector_store().as_retriever(search_kwargs={"k": 4})
    return (
        {"context": retriever | _format_docs, "question": RunnablePassthrough()}
        | ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
        | llm
        | StrOutputParser()
    )
```

**设计要点：**
- 文档上传后自动切分为 chunk，通过 Embedding 模型向量化存储
- 检索时取 Top-4 相似文档拼接为上下文，约束 LLM 仅基于文档内容回答
- 支持 DashScope / OpenAI 两种 Embedding 提供商，可配置切换

---

### 4. 统一响应与分层架构

后端采用 **API → Service → Model** 三层架构，所有接口返回统一格式。

```python
# backend/app/common/response.py
class Response(BaseModel):
    code: int
    message: str
    data: Any = None

    @classmethod
    def success(cls, message="操作成功", data=None):
        return cls(code=200, message=message, data=data)
```

```python
# backend/app/api/reservation.py
@router.post("")
def create_reservation(
    data: ReservationCreateRequest,
    current_user: User = Depends(get_current_user),  # JWT 认证注入
    db: Session = Depends(get_db),
):
    res = reservation_service.create_reservation(db, data, current_user.id)
    return Response.success(data=res, message="预约提交成功")
```

**分层职责：**
| 层级 | 职责 |
|------|------|
| API 层 | 参数校验、权限控制、响应封装 |
| Service 层 | 业务逻辑、事务管理、冲突检测 |
| Model 层 | 数据持久化、ORM 映射 |

---

## 系统架构

```
浏览器 ──:80──► Nginx(前端) ──内部网络──► FastAPI(后端) ──:3306──► MySQL
                 │ 静态资源            │
                 └── /api/* ──────────┘
                 └── /uploads/* ──────┘
```

| 服务 | 容器内端口 | 对外端口 |
|------|-----------|---------|
| frontend (Nginx) | 80 | **80** |
| backend (FastAPI) | 8000 | 内部 |
| MySQL | 3306 | 外部独立服务器 |

---

## 项目结构

```
SmartReservation/
├── backend/                    # 后端服务
│   ├── main.py                 # FastAPI 入口
│   ├── app/
│   │   ├── api/                # API 路由层
│   │   ├── model/              # 数据模型 (SQLAlchemy)
│   │   ├── schemas/            # Pydantic 数据验证
│   │   ├── service/            # 业务逻辑层
│   │   ├── rag/                # RAG 知识库模块
│   │   ├── langgraph/          # LangGraph AI Agent
│   │   ├── dependencies/       # 依赖注入
│   │   ├── utils/              # 工具函数
│   │   └── common/             # 公共组件
│   └── test/                   # 测试文件
├── frontend/                   # 前端应用
│   ├── src/
│   │   ├── views/              # 页面视图
│   │   ├── components/         # 公共组件
│   │   ├── api/                # API 请求封装
│   │   ├── router/             # 路由配置
│   │   └── utils/              # 工具函数
│   └── docker/nginx.conf       # Nginx 配置
├── docker-compose.yml          # Docker 编排（开发构建）
├── docker-compose.prod.yml     # Docker 编排（生产运行）
└── pyproject.toml              # 根项目配置
```

---

## 数据模型

```
User (用户) 1───N Reservation (预约)
                    │
Space (区域) 1───N Reservation
                    │
Seat (座位) 1───N Reservation

User 1───N ChatSession (聊天会话)
              │
ChatSession 1───N ChatMessage (聊天消息)
```

---

## 部署方式

### 方式一：Docker 镜像部署（推荐）

```bash
docker load -i smart-reservation.tar
docker-compose -f docker-compose.prod.yml up -d
```

### 方式二：源码构建部署

```bash
docker-compose up -d --build
```

### 环境变量配置

复制 `backend/.env.example` 为 `backend/.env`：

| 配置项 | 说明 |
|--------|------|
| `DATABASE_URL` | MySQL 连接字符串 |
| `JWT_SECRET_KEY` | JWT 签名密钥 |
| `OPENAI_API_KEY` | OpenAI API Key |
| `OPENAI_BASE_URL` | API 代理地址（可选） |

---

## 设计亮点

1. **智能预约冲突检测**：基于时间段的容量计算模型，支持区域级多人预约与座位级单人预约
2. **可视化时间轴**：学生端支持拖拽选择预约时段，直观显示占用情况
3. **AI Agent 对话预约**：通过自然语言对话完成预约，LangGraph 自动编排工具调用
4. **RAG 知识库**：支持上传 Markdown 文档，AI 基于知识库内容精准回答
5. **分层架构**：API / Service / Schema / Model 严格分层，统一异常处理与响应格式
6. **生产就绪**：Docker Compose 部署、数据持久化、健康检查、Nginx 反向代理

---

## 快速开始

### 环境要求

- Docker & Docker Compose
- Python >= 3.13（本地开发）
- Node.js >= 22（本地开发）

### 本地开发

```bash
# 后端
cd backend
pip install -e .
uvicorn app.main:app --reload

# 前端
cd frontend
npm install
npm run dev
```

### Docker 部署

```bash
docker-compose up -d --build
```

访问 `http://localhost` 即可使用。

