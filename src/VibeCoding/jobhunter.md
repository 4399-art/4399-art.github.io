# JobHunter — AI 全链路求职自动化平台

> 从岗位抓取 → 数据清洗 → AI 评估 → 简历改写 → 人工审批 → 自动投递的端到端求职自动化系统。
> 支持 **BOSS 直聘 / 前程无忧 / 猎聘 / 智联招聘** 四大平台，内置飞书 ChatOps 指挥中心、在线简历多平台回写、面试训练营等模块。

---

## 一、项目定位

解决的核心痛点是：求职流程中"抓岗位—筛岗位—改简历—投简历"这一长链耗时耗力，且四大招聘平台各有独立页面与风控，难以统一处理。

技术上它是一个典型的 **AI Agent × 自动化流水线 × 多平台集成** 的工程实践，适合展示：状态机设计、并发控制、LLM 应用架构、浏览器自动化、系统可靠性（断点恢复 / 防重复投递 / 幂等）、以及前后端完整工程能力。

---

## 二、系统架构总览

```
                              ┌──────────────────────────────────────────┐
                              │           Next.js 前端工作台             │
                              │  指挥中心 / 简历编辑器 / 策略实验室 / 看板   │
                              └───────────────┬──────────────────────────┘
                                              │ REST API / SSE
                              ┌───────────────▼──────────────────────────┐
                              │            FastAPI 后端服务               │
                              │  ┌────────────────────────────────────┐   │
                              │  │     LangGraph 状态机流水线         │   │
                              │  │  evaluate → rewrite/greeting →   │   │
                              │  │  manual_review(断点) → delivery    │   │
                              │  └────────────────────────────────────┘   │
                              │  ┌─────────┐ ┌─────────┐ ┌──────────┐   │
                              │  │AI 评估器 │ │ChatOps   │ │投递引擎   │   │
                              │  │(8维度)  │ │(LLM+SSE) │ │(Playwright)│  │
                              │  └─────────┘ └─────────┘ └──────────┘   │
                              └──────┬────────────┬────────────┬─────────┘
                                     │            │            │
                          ┌──────────▼──┐  ┌──────▼────┐  ┌──▼──────────────┐
                          │  LLM API     │  │ 飞书开放   │  │ Edge 浏览器实例   │
                          │ (OpenAI兼容) │  │ 多维表格   │  │ (4平台持久化Profile)│
                          └──────────────┘  └───────────┘  └─────────────────┘
```

---

## 三、技术栈

| 层 | 技术 | 选型理由 |
|---|---|---|
| **后端框架** | FastAPI + Pydantic v2 | 异步原生、类型安全、自动 OpenAPI |
| **流水线编排** | LangGraph | 状态机式节点编排，支持断点持久化（SQLite Checkpoint）和条件路由 |
| **并发模型** | asyncio + Semaphore + Lock | 细粒度并发控制：评估 LLM 并发闸门、投递浏览器串行锁 |
| **浏览器自动化** | Playwright（CDP） + DrissionPage | 持久化 Profile 保持登录态；CDP 协议直连更稳定 |
| **LLM 集成** | LangChain + OpenAI SDK | 多通道（主/视觉/清洗）分离、可插拔、支持自定义 Skill |
| **数据库** | SQLite（SQLModel/SQLAlchemy） | 单机轻量，`langgraph-checkpoint-sqlite` 原生支持中断恢复 |
| **定时任务** | APScheduler | 波次发射 / 飞书战报定时推送 |
| **飞书集成** | lark-oapi SDK + WebSocket 长连接 | 多维表格同步 + ChatOps 指令通道 |
| **前端** | Next.js (App Router) + Tailwind v4 + shadcn/ui | 组件丰富、服务端渲染、App Router 支持布局嵌套 |
| **状态管理** | Zustand | 轻量，配合 React Context 做简历编辑器多 Tab 状态隔离 |
| **测试** | pytest (anyio) + Vitest + Testing Library | 后端 anyio auto 模式支持裸 async 测试；前端组件测试 |
| **部署** | 宿主机常驻（uvicorn + Next.js） | 爬虫依赖真实浏览器环境，不适合 Docker |

---

## 四、核心模块详解

### 4.1 LangGraph 状态机流水线（核心亮点）

整个评估→改写→投递的链路被建模为一个 **LangGraph StateGraph**。这是项目中最关键的架构决策。

#### 状态 Schema 定义

```python
# backend/app/automation/workflow.py:36-76
class JobApplicationState(TypedDict):
    job_id: str
    record_id: str
    platform: str          # boss / 51job / liepin / zhilian
    company_name: str
    job_name: str
    jd_text: str
    salary: str
    city: str
    # ... 基础岗位信息

    resume_text: str       # 精投简历底稿
    mass_resume_text: str  # 海投简历（C-F 级通用）
    preferences_text: str  # 求职偏好（硬规则+加分项）
    company_intel: str     # Serper 检索到的公司情报

    ai_score: float
    grade: str             # A/B/C/D/F
    diagnosis_dict: dict   # 8 维度打分细节

    final_markdown: str    # AI 改写后的定制简历
    greeting: str          # 定制打招呼语

    stop_at_review: bool   # 定时链路置 True：停在审批断点，投递交给定时发射
    pipeline_task_id: str  # 用于 SSE 实时广播
```

#### 条件路由分流（核心设计）

初评后根据 **grade（评级）+ 配置阈值** 把岗位分流到两条完全不同的轨道：

```python
# backend/app/automation/workflow.py:813-844
def route_after_evaluate(state: JobApplicationState) -> str:
    """初评后动态分流：精投定制轨 vs 海投物料轨"""
    if state.get("error"):
        return END

    config = get_autopilot_config()
    if not config.get("enable_resume_rewrite", True):
        return "quick_greeting_node"   # 全局禁用改写 → 强制海投轨

    grade = state.get("grade", "C").upper()
    threshold = get_auto_eval_threshold()

    if grade_meets_threshold(grade, threshold):
        return "rewrite_node"          # A/B 级 → 精投定制轨
    else:
        return "quick_greeting_node"    # C-F 级 → 海投物料轨
```

#### 完整状态图构建

```python
# backend/app/automation/workflow.py:921-974
def build_pipeline_graph() -> StateGraph:
    workflow = StateGraph(JobApplicationState)

    # 注册节点
    workflow.add_node("evaluate_node", evaluate_node)           # ① AI 8维度初评
    workflow.add_node("rewrite_node", rewrite_node)             # ②A 深度改写（A/B级）
    workflow.add_node("quick_greeting_node", quick_greeting_node)  # ②B 海投通用话术
    workflow.add_node("manual_review_node", manual_review_node)  # ③ 人工审批断点
    workflow.add_node("delivery_node", delivery_node)           # ④ 自动投递

    workflow.set_entry_point("evaluate_node")

    # 初评后条件路由（rewrite vs quick_greeting vs END）
    workflow.add_conditional_edges("evaluate_node", route_after_evaluate, {...})

    # 精投/海投两轨汇聚到「投递前安检」
    workflow.add_conditional_edges("quick_greeting_node", route_before_delivery, {...})
    workflow.add_conditional_edges("rewrite_node",      route_before_delivery, {...})

    workflow.add_edge("manual_review_node", "delivery_node")  # 审批放行 → 投递
    workflow.add_edge("delivery_node", END)

    return workflow
```

**状态图结构示意：**

```
          ┌── A/B级 ──→ rewrite_node ──┐
evaluate ─┤                           ├──→ route_before_delivery ──┬── 闸门过 ──→ delivery_node ──→ END
          └── C-F级 ──→ quick_greeting ─┘                         └── 闸门挡 ──→ manual_review ──→ delivery
                                                                               (人工审批断点)
```

#### 断点持久化 & 中断恢复

LangGraph 的 Checkpointer 让每个节点的状态自动持久化到 SQLite：

```python
# 编译图时注入 SQLite Checkpointer
from langgraph.checkpoint.sqlite.aio import AsyncSqliteSaver

memory = AsyncSqliteSaver.from_conn_string("checkpoints.db")

pipeline_app = build_pipeline_graph().compile(
    checkpointer=memory,
    interrupt_before=["manual_review_node"]  # 👈 在审批断点自动中断！
)

# 服务重启后，按 thread_id 从最后一个 checkpoint 续跑
await pipeline_app.astream(None, {"configurable": {"thread_id": record_id}})
```

这意味着：
- 流程到达 `manual_review_node` 时**自动暂停**（飞书写入「简历人工复核」）
- 老板在飞书点击"放行"后，从该节点继续推进到 `delivery_node`
- 服务意外重启不丢失任何进度

---

### 4.2 并发控制体系

#### 评估阶段 Semaphore（LLM 并发闸门）

评估节点是 LLM 密集型，用 `asyncio.Semaphore` 控制同时发起的初评请求数：

```python
# backend/app/automation/workflow.py:84-94
_eval_semaphore: asyncio.Semaphore | None = None

def _get_eval_semaphore() -> asyncio.Semaphore:
    global _eval_semaphore
    if _eval_semaphore is None:
        n = int(get_autopilot_config().get("eval_concurrency") or 5)
        _eval_semaphore = asyncio.Semaphore(max(1, min(50, n)))
    return _eval_semaphore

# 在 evaluate_node 中使用
sem = _get_eval_semaphore()
if sem.locked():
    await _emit_sub("ai_eval_queued")    # 闸门忙 → 广播"排队中"
async with sem:
    await _emit_sub("ai_eval")            # 拿到槽位 → 广播"打分中"
    result = await asyncio.to_thread(evaluate_single_job, ...)
```

#### 投递阶段串行锁 + 飞行中登记

投递环节需要操作真实浏览器（CDP），同一时刻只能有一个浏览器实例在工作：

```python
# backend/app/automation/workflow.py:508-535
_delivery_serial_lock = asyncio.Lock()
_DELIVERY_INFLIGHT_RECORD_IDS: set[str] = set()

async def delivery_node(state: JobApplicationState) -> dict[str, Any]:
    record_id = extract_record_id(state.get("record_id") or "")
    # 第一道关卡：防重复发射（多链路可能同时命中同一岗位）
    async with _delivery_inflight_lock:
        if record_id in _DELIVERY_INFLIGHT_RECORD_IDS:
            return {"error": f"岗位 {record_id} 正在另一条链路执行中"}
        _DELIVERY_INFLIGHT_RECORD_IDS.add(record_id)

    try:
        # 第二道关卡：全局浏览器互斥锁
        async with _delivery_serial_lock:
            if "boss" in platform:
                res = await deliver_boss_job.ainvoke({"job_data": job_data})
            elif "猎聘" in platform or "liepin" in platform:
                res = await deliver_liepin_job.ainvoke({"job_data": job_data})
            # ... 其他平台
    finally:
        _DELIVERY_INFLIGHT_RECORD_IDS.discard(record_id)
```

---

### 4.3 AI 评估引擎（8 维度打分）

#### 评估 Prompt 设计

```python
# backend/ai_agents/ai_evaluator.py:96-105
_DIM_LABELS = [
    ("role_match",     "角色匹配"),    # 权重最高
    ("skills_align",   "技能重合"),
    ("seniority",      "职级资历"),    # 高权重
    ("compensation",   "薪资契合"),
    ("interview_prob", "面试概率"),
    ("company_stage",  "公司阶段"),
    ("market_fit",     "赛道前景"),
    ("growth",         "成长空间"),
]
```

评估 Prompt 中有大量的**约束校准规则**来防止 LLM 幻觉和主观偏差，例如：

```
⚠️ 【能力溢出（Overqualified）满分规则 - 必须执行】：
如果候选人的学历、经验、技能或资历**超出**岗位要求，绝对禁止打低分。
只要满足或高于岗位要求，就应视为完全匹配，直接给予 5 分满分。

⚠️ 【中性维度强制规则】：
"company_stage" 维度默认给 3 分，除非搜索出明确正面证据才给 4-5 分。
绝对禁止给出 1-2 分。
```

#### 公司情报搜索（Serper 并发多路）

评估 `company_stage` / `market_fit` / `growth` 三个维度时，需要外部公司情报：

```python
# company_intel.py（简化）
async def search_company_ai_news(company_name: str) -> str:
    """4 路并发搜索 + 表格缓存 + Tavily 降级"""
    queries = [
        f"{company_name} 融资历程",
        f"{company_name} 公司规模 员工数",
        f"{company_name} 主营业务 产品",
        f"{company_name} 最新动态 新闻",
    ]
    tasks = [serper_search(q) for q in queries]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    # ... 合并为结构化情报返回评估节点
```

---

### 4.4 ChatOps 指挥系统（自然语言 → 自动化流水线）

在飞书聊天框输入"帮我抓一批广州的产品经理岗位，100 个"，后端完成：
1. LLM 意图解析（提取平台 / 数量 / 城市 / 关键词）
2. 调度爬虫子进程（boss login → boss_collector.py）
3. **SSE 实时日志流**推送进度（休眠倒计时、入库统计）

#### 意图解析核心

```python
# backend/app/api/routes/chatops.py:64-125
async def parse_chat_intent(command: str, history: list = None) -> dict:
    system_prompt = """你是爬虫任务编排助手。提取参数并输出 JSON。
action 枚举: scrape/evaluate/clean/push/query_db/stop_scrape/...
字段: platforms[], keyword, city, salary, target_count, ...
"""
    response = await asyncio.to_thread(
        get_client().chat.completions.create,
        model=settings.OPENAI_MODEL,
        messages=messages,
        temperature=0.1
    )
    return json.loads(response.choices[0].message.content)
```

#### 调度器 + SSE 实时流

```python
# backend/app/api/routes/chatops.py:128-298（简化）
async def run_sequential_chatops_scheduler(task_id, platforms, ..., queue):
    for plat in platforms:
        # BOSS 直聘需要先刷新 Cookie 登录态
        if plat == "boss":
            await queue.put('data: {"type": "info", "message": "🔐 正在自动提取 Edge Cookie..."}')
            await asyncio.create_subprocess_exec("boss", "login", "--cookie-source", "edge", ...)

        # 动态模式：目标入库 100 条，自动翻页 + 风控休眠
        while tracker["inserted"] < target_count:
            process = await asyncio.create_subprocess_exec("python", script_path, "-p", str(page))
            # 实时读取爬虫 stdout → SSE 推送给飞书
            # 抓取目标后休眠 10 分钟（防风控）
            if tracker["inserted"] < target_count:
                await queue.put('data: {"type": "info", "message": "🛡️ 休眠倒计时：还剩 X 分钟..."}')
                await asyncio.sleep(600)
```

---

### 4.5 投递引擎（多平台 Browser Automation）

投递是最复杂的环节：每个平台的投递流程不同（BOSS 需要发微聊 + 图片简历；智联需要发起微聊私信；51job 无打招呼机制），且需要保持登录态。

#### 平台化投递 Tool 统一入口

```python
# backend/app/automation/workflow.py:743-753
async with _delivery_serial_lock:
    if "boss" in platform:
        res = await deliver_boss_job.ainvoke({"job_data": job_data})
    elif "猎聘" in platform or "liepin" in platform:
        res = await deliver_liepin_job.ainvoke({"job_data": job_data})
    elif "51job" in platform or "前程无忧" in platform:
        res = await deliver_51job_job.ainvoke({"job_data": job_data})
    elif "智联" in platform or "zhilian" in platform:
        res = await deliver_zhilian_job.ainvoke({"job_data": job_data})
```

#### 投递前物料校验（防呆拦截）

```python
# backend/app/automation/workflow.py:677-696
# 打招呼语合法性校验：拦截 LLM 失败时返回的 "❌ AI 服务未配置"
if greeting and not is_valid_greeting(greeting):
    return {"error": "打招呼语为非法内容，已拦截"}

# BOSS 必须有图片简历；51job/智联/猎聘 必须有 PDF
if _need_resume and is_boss and not image_items:
    return {"error": "缺少图片简历附件"}
if _need_resume and (is_zhilian or is_51job or is_liepin) and not file_token:
    return {"error": "缺少 PDF 简历附件"}
```

#### 海投自愈补料

投递时如果发现物料缺失（PDF / 图片 / 打招呼语），现场极速装配：

```python
# backend/app/automation/workflow.py:639-676
if is_mass and (need_pdf_now or need_img_now or not greeting):
    # 触发即时自愈装配：渲染海投通用简历 PDF + 长图
    mats = await _render_mass_resume_materials(target_mass_id, need_image=need_img_now)
    # 回写飞书，避免下次再缺
    await asyncio.to_thread(update_feishu_record, rid, attach_updates)
```

---

### 4.6 简历改写引擎（Skill-Based）

A/B 级岗位走定制轨道，生成"公司名_岗位名"专属简历。支持**官方 Skill** 和**自定义 Skill**（用户上传的多产物 Skill 包）。

```python
# backend/app/automation/workflow.py:272-383
# 1. 判断 Skill 类型
is_custom_skill = bool(skill_id and skill_id not in {"official", "default", "resume_rewrite"})

# 2. Markdown → 结构化 JSON（前端三端直读：定制面板 / PDF 渲染 / ChatAgent 交付）
rewrite_v2 = parse_markdown_to_json(md_resume)
# 缝合：如果 AI 改写时丢了 personalInfo，从飞书基准简历库拉取补上
if rewrite_v2 and not rewrite_v2.get("personalInfo"):
    active_rec = await feishu_client.get_record(table_id, active_rid)
    rewrite_v2["personalInfo"] = json.loads(active_rec["结构化数据"]).get("personalInfo")

# 3. 官方 Skill 自动渲染 PDF + 长图并挂载到飞书
if not is_custom_skill:
    mats = await _render_custom_resume_materials(parsed_json, cleaned_name)
    updates["PDF备份"] = [{"file_token": mats["pdf_token"], "name": f"{mats['name']}.pdf"}]
    updates["图片保存"] = [{"file_token": mats["img_token"], "name": f"{mats['name']}-长图.jpg"}]
else:
    # 自定义 Skill：清空通用旧物料，引导用户在定制面板手动生成
    updates["PDF备份"] = []
    updates["图片保存"] = []
```

---

## 五、关键设计决策 & 踩坑经验

### 5.1 为什么用 LangGraph 而不是简单的 asyncio Pipeline？

| 需求 | asyncio.gather 硬写 | LangGraph |
|------|-------------------|-----------|
| 分支路由（精投/海投两轨） | `if/else` 硬编码，改逻辑要重写整条链 | `add_conditional_edges` 声明式定义 |
| 断点持久化（人工审批） | 需要自己写 save/restore 到 SQLite | `AsyncSqliteSaver` + `interrupt_before` 原生支持 |
| 服务重启恢复 | 状态全丢，得重跑 | 按 `thread_id` 从 checkpoint 续跑 |
| 动态跳过节点 | 大量 flag 判断 | State 字段天然携带，路由函数读 state 做决策 |

### 5.2 为什么用 Playwright + 持久化 Profile？

- 招聘平台风控升级后，headless 浏览器指纹极易被识别
- **持久化 Edge Profile**：用真实浏览器扫码登录一次，登录态持久化到本地目录，CDP 协议连接同一 Profile 下的浏览器实例，看起来就是"同一个真实用户"
- 代价是不能 Docker 化（容器里没有真实浏览器），只能宿主机常驻

### 5.3 并发闸门 vs 串行锁的分层设计

```
评估阶段（LLM 密集）:
    → Semaphore(5) 限制同时发 5 个 LLM 请求
    → 下游 rewrite/greeting 不排队，各岗位全并行

投递阶段（浏览器密集）:
    → asyncio.Lock() 全局互斥，同一时刻只有 1 个浏览器在工作
    → _DELIVERY_INFLIGHT_RECORD_IDS 集合防重复发射
    → abort 事件支持任意时刻取消投递
```

### 5.4 飞书作为"数据中枢"而不是 SQLite

选择飞书多维表格做数据层的好处：
- **天然可视化**：招聘信息用多维表格的 Gallery / Board / Form 视图，不用自己写前端
- **自带协作**：手动审批断点时，在飞书里改字段值（跟进状态→待投递）就是"放行"
- **消息推送**：卡片消息直接推到飞书群，SSE 实时流也通过飞书 WebSocket 接收
- **零运维**：不用管数据库备份、迁移、扩容

---

## 六、项目目录结构

```
jobhunter-ai/
├── backend/
│   ├── app/
│   │   ├── automation/         ⭐ LangGraph 流水线核心
│   │   │   ├── workflow.py       StateGraph 定义 + 5 个节点 + 条件路由
│   │   │   ├── graph_runner.py   多岗位并发图流转执行器
│   │   │   ├── scheduler.py      APScheduler 定时波次发射
│   │   │   ├── platform_semaphore.py  平台级并发守卫
│   │   │   ├── pipeline_broadcast.py  SSE 实时广播
│   │   │   └── delivery_tasks.py    投递任务登记与失败重试
│   │   ├── ai_agents/         ⭐ AI 评估与改写引擎
│   │   │   ├── ai_evaluator.py   8 维度评估主逻辑
│   │   │   ├── ai_scorer.py      深度画像 / 理想岗位分析
│   │   │   ├── engine_facade.py  改写 + 打招呼语门面
│   │   │   └── company_intel.py  Serper 公司情报搜索
│   │   ├── api/               路由层
│   │   │   ├── routes/           chatops / crawlers / webhook
│   │   │   └── resume_editor/    简历回写路由
│   │   ├── copilot/            ChatAgent（对话式求职助理）
│   │   ├── core/               基础设施（config / llm / feishu / cache）
│   │   ├── interview/          面试训练营（模拟面试 + TTS + RAG）
│   │   ├── services/           业务服务层（feishu / report / map / search）
│   │   └── session/            浏览器会话管理
│   ├── boss_scraper/          BOSS 直聘爬虫（DrissionPage）
│   ├── 51job_scraper/         前程无忧爬虫 + 海投
│   ├── common/                全局配置
│   └── data/                  SQLite 数据库 + 浏览器 Profile
├── frontend/
│   ├── app/
│   │   ├── resume-editor/        ⭐ 简历编辑器（4 平台 Tab + 在线回写）
│   │   ├── analytics/            数据分析看板
│   │   ├── dashboard/            仪表盘
│   │   └── strategy/             策略实验室
│   └── components/
│       ├── command-center/       ⭐ 全链路指挥中心
│       └── dashboard/features/   面试训练营 / AI 评分 / Spider 引擎
└── docs/                       架构文档 / 部署指南
```

---

## 七、启动方式

### 环境要求

- Python 3.10+（推荐 uv）
- Node.js 18+
- Chrome / Edge 浏览器（爬虫登录态依赖）

### 本地启动

```bash
# 后端
cd backend
uv sync                          # 安装依赖
cp .env.example .env             # 填写飞书 / LLM / Serper 密钥
playwright install chromium      # 安装浏览器
uvicorn app.main:app --reload    # http://localhost:8000

# 前端
cd frontend
npm install
npm run dev                      # http://localhost:3000
```

### 生产部署（宿主机常驻 + pm2）

```bash
pm2 start "uvicorn app.main:app --host 0.0.0.0 --port 8000" --name jobhunter-api --cwd backend
pm2 start "npm start" --name jobhunter-web --cwd frontend
```

---

## 八、可展示的亮点清单（面试速查）

| # | 话题 | 关键词 | 位置 |
|---|------|--------|------|
| 1 | 状态机流水线设计 | LangGraph / StateGraph / 条件路由 / 断点持久化 | `workflow.py` |
| 2 | 分层并发控制 | Semaphore(评估闸门) / Lock(投递互斥) / inflight set(防重复发射) | `workflow.py` |
| 3 | 自然语言指挥系统 | LLM 意图解析 / SSE 实时流 / 子进程调度 | `chatops.py` |
| 4 | Prompt 工程校准 | 8 维度打分 / Overqualified 满分规则 / 中性维度强制 3 分 | `ai_evaluator.py` |
| 5 | 多平台投递引擎 | Playwright CDP / 持久化 Profile / 4 平台差异化流程 | `boss_scraper/51job_scraper/...` |
| 6 | 自愈机制 | 海投物料检测→即时渲染→飞书回写 | `delivery_node` |
| 7 | 数据中台设计 | 飞书多维表格做数据源 + 消息通道 + 审批入口 | `feishu_client` |
| 8 | 配置热更新 | `.env` + `settings.json` 双层，保存即生效 | `common/config.py` |
| 9 | 可恢复性 | LangGraph SQLite Checkpoint + abort 事件 + 飞行中登记 | `graph_runner.py` |
| 10 | 前端多平台简历编辑 | 4 平台 Tab 隔离 / Zustand / 在线回写 | `frontend/app/resume-editor/` |

---

> 本文档面向面试展示场景编写。代码片段摘录自项目核心路径，已脱敏去重。完整代码参考 [GitHub 仓库](https://github.com/jolie-z/jobhunter-ai)。