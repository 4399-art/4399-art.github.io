# LangChain

##  📖 什么是 RAG？

**RAG (Retrieval-Augmented Generation)** 即检索增强生成。它的核心思想是：在让大语言模型（LLM）回答问题之前，先从本地知识库中检索出相关的文档片段，然后将这些片段作为“上下文”连同问题一起喂给大模型，从而让大模型基于你的私有数据给出准确的回答，**有效避免大模型的“幻觉”问题**。

**RAG 核心流程图：**
加载文档 -> 文本切分 -> 向量化 (Embedding) -> 存入向量数据库 -> 提问 -> 检索相似度最高的文档块 -> 拼接 Prompt -> LLM 生成回答

## 🛠️ 准备工作

### 1. 环境搭建
建议使用 Python 3.9 - 3.11 版本。首先创建一个虚拟环境，然后安装必要的依赖包。

本教程使用目前最主流的框架：**LangChain** + **Chroma** (轻量级向量数据库) + **OpenAI API**。

```bash
# 创建虚拟环境 (可选)
python -m venv rag_env
source rag_env/bin/activate  # Mac/Linux
rag_env\Scripts\activate     # Windows

# 安装核心依赖
pip install langchain langchain-openai langchain-community chromadb tiktoken pypdf
```

### 2. 配置 API Key
在项目根目录创建一个 `.env` 文件，或者直接在 Python 代码中设置环境变量。本例以 OpenAI 为例（也可以平替为国内的大模型如通义千问、智谱等）。

```python
import os
# 替换为你的 OpenAI API Key
os.environ["OPENAI_API_KEY"] = "sk-xxxxxxxxxxxxxxxxxxxxxxxx"
# 如果使用代理或第三方中转API，可以配置 BASE_URL
# os.environ["OPENAI_API_BASE"] = "https://api.your-proxy.com/v1" 
```

---

## 💻 详细代码实现步骤

### 第一步：文档加载 (Document Loading)
我们需要将本地的 PDF、TXT 或 Word 文档加载进内存中。这里以 PDF 为例。

```python
from langchain_community.document_loaders import PyPDFLoader

# 1. 指定你的知识库文件路径
file_path = "sample_knowledge.pdf" 

# 2. 使用 Loader 加载文档
loader = PyPDFLoader(file_path)
documents = loader.load()

print(f"成功加载文档，共 {len(documents)} 页。")
```

### 第二步：文本切分 (Text Splitting)
大模型有上下文窗口限制（Token限制），整本书塞进去会报错或丢失细节。我们需要把文档切分成几百字一个的文本块（Chunk）。

```python
# ✅ 新版正确写法
from langchain_text_splitters import RecursiveCharacterTextSplitter

# 初始化文本切分器
# chunk_size: 每个文本块的最大长度
# chunk_overlap: 相邻文本块之间的重叠字数（防止切断上下文关系）
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", "。", "！", "？", "，", " ", ""]
)

# 执行切分
chunks = text_splitter.split_documents(documents)
print(f"文档被切分成了 {len(chunks)} 个文本块。")
```

### 第三步：向量化与存储 (Embedding & Vector Database)
将切分好的文本块转化为向量（一串数字），并存入 Chroma 向量数据库，方便后续进行语义相似度检索。

```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

# 1. 初始化 Embedding 模型 (这里使用 OpenAI 的 text-embedding-3-small)
embeddings_model = OpenAIEmbeddings(model="text-embedding-3-small")

# 2. 设定向量数据库本地保存路径
persist_directory = "./chroma_db"

# 3. 创建并保存向量数据库
# 注意：如果数据库已存在，可以直接加载，不需要每次都重新创建
vector_db = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings_model,
    persist_directory=persist_directory
)

print("向量数据库构建并持久化完成！")
```

### 第四步：构建检索器 (Retriever)
设置当用户提问时，如何从数据库中找回最相关的文档块。

```python
# 将向量数据库转化为检索器
# search_kwargs={"k": 3} 表示每次提问检索出最相关的 3 个文档块
retriever = vector_db.as_retriever(search_type="similarity", search_kwargs={"k": 3})

# 我们可以先测试一下检索效果
test_query = "文档中提到的核心产品是什么？"
docs = retriever.invoke(test_query)
print("检索到的相关文档片段：")
for i, doc in enumerate(docs):
    print(f"片段 {i+1}: {doc.page_content}\n")
```

### 第五步：构建 Prompt 模板
我们需要告诉大模型：“请根据我提供的上下文来回答用户的问题，如果你不知道，就说不知道”。

```python
from langchain_core.prompts import ChatPromptTemplate

system_prompt = (
    "你是一个有用的问答助手。"
    "请使用以下检索到的上下文来回答用户的问题。"
    "如果你不知道答案，请直接说不知道，不要编造答案。"
    "回答要尽可能详细且条理清晰。"
    "\n\n"
    "上下文内容："
    "\n{context}"
)

prompt_template = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}"),
])
```

### 第六步：接入 LLM 并构建完整的 RAG 链
使用 LangChain 的最新语法（LCEL），将检索器、Prompt 和大模型串联起来。

```python
from langchain_openai import ChatOpenAI
# ✅ 新版正确写法
from langchain_classic.chains import create_retrieval_chain
from langchain_classic.chains.combine_documents import create_stuff_documents_chain

# 1. 初始化大语言模型
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# 2. 创建文档处理链 (把检索到的 chunk 塞进 prompt 的 {context} 中)
question_answer_chain = create_stuff_documents_chain(llm, prompt_template)

# 3. 创建完整的 RAG 检索链 (负责接收输入 -> 检索 -> 交给文档链处理)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)
```

### 第七步：向知识库提问！
```python
# 用户的提问
user_question = "请总结一下这份文档主要讲了什么内容？"

# 执行 RAG 链
response = rag_chain.invoke({"input": user_question})

print("🤖 知识库回答：")
print(response["answer"])

# 查看大模型是基于哪些原文回答的
print("\n🔍 参考文档来源：")
for doc in response["context"]:
    print(f"- 来源页码: {doc.metadata.get('page')}")
```

---

## 🌟 进阶优化方案 (从 Demo 到生产级)

搭建完基础版后，你可能会发现回答不够准，可以通过以下几个方向优化：

### 1. 更换开源免费模型 (本地化)
如果不想花钱调用 OpenAI：
*   **Embedding**: 使用 HuggingFace 开源模型，如 `BAAI/bge-large-zh-v1.5`（中文效果极佳）。
*   **LLM**: 使用 `Ollama` 部署本地大模型（如 Llama3, Qwen2）。

### 2. 文档解析优化
*   普通 `PyPDFLoader` 对表格、图片的解析很差。
*   **优化方案**：使用专门的 PDF 解析工具，如 `Marker`、`Unstructured` 或 `RapidOCR`。

### 3. 高级检索策略 (Advanced RAG)
*   **混合检索 (Hybrid Search)**：向量检索 (语义) + BM25 (关键词检索)，解决专有名词搜不到的问题。
*   **重排 (Rerank)**：先召回 10-20 个文档块，然后用一个 Reranker 模型（如 `bge-reranker` 或 `Cohere Rerank`）对这 20 个文档块进行打分重新排序，将最相关的 3 个喂给大模型。

### 4. 增加记忆功能 (Conversational RAG)
目前的链是“单轮对话”。如果想让知识库能记住上下文（例如：“它有什么特点？”），需要引入 `HistoryAwareRetriever`，利用历史对话重写用户的查询。

---

## 📁 完整目录结构参考

```text
my_rag_project/
│
├── chroma_db/               # 向量数据库自动生成的文件夹
├── sample_knowledge.pdf     # 你的知识库文档
├── .env                     # 环境变量(API Keys)
├── requirements.txt         # 依赖包列表
└── main.py                  # 将上述所有步骤整合的运行代码
```