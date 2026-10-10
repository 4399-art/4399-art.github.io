# AI 驱动基金分析系统：从数据抓取到智能决策

> 一个前后端分离的本地基金分析工具，支持实时估值、持仓管理、AI 投资决策、市场复盘与新闻智能关联。

---

## 项目简介

这个项目起源于一个朴素的需求：**能不能每天打开一个页面，就知道我的基金今天赚了多少钱、哪些该加仓、哪些该减仓？**

市面上有不少基金 APP，但它们要么数据不全、要么不支持 AI 分析、要么界面臃肿。所以我决定自己造一个轮子，目标很明确：

- **一套本地运行的系统**：数据自己抓、配置自己控、数据存自己的 SQLite
- **一个 Dashboard 看全持仓**：实时估值、今日预估、累计盈亏一目了然
- **AI 给出可执行的建议**：单基买卖信号、组合诊断、市场情绪判断
- **新闻自动关联持仓**：重仓股相关新闻自动聚合 + AI 解读影响

目前已实现 **8 个页面 + 20+ API**，核心的估值链路、AI 决策链路和持仓汇总链路都跑通了。

---

## 技术栈

| 层 | 技术选型 | 选型理由 |
|----|----------|----------|
| 后端框架 | **FastAPI + Pydantic** | 类型安全、自动生成 OpenAPI 文档、异步原生支持 |
| 数据库 | **SQLite (aiosqlite + WAL)** | 零运维、文件即数据库、WAL 模式支持多读单写并发 |
| 数据抓取 | **httpx + 东方财富爬虫 + AkShare** | httpx 异步高性能；东财接口覆盖最全；AkShare 兜底 |
| LLM | **OpenAI 兼容 SDK**（支持 DeepSeek / OpenAI / 阿里百炼 / 智谱 / 豆包 / 自定义） | DeepSeek 性价比最高、JSON 输出稳定；一套代码兼容多家 |
| 搜索 | **Tavily / Bocha / Serper / SerpAPI**（可切换） | Tavily 专为 AI Agent 设计，中文效果好 |
| 前端框架 | **Vue 3 + TypeScript + Vite** | Composition API 写着舒服；Vite 启动 300ms |
| UI 组件 | **Element Plus** | 表单项最全、Table 排序/列宽拖动、主题可定制 |
| 图表 | **ECharts** | 净值走势、行业饼图、信号仪表盘 |
| 状态管理 | **Pinia** | Vue 3 官方推荐 |

> 全栈 **Python 3.13 + Vue 3 + TypeScript**，没有用 Celery/Redis 这类重型组件，单机 SQLite 足够。

---

## 项目结构

```
Fund/
├── backend/                          # FastAPI 后端
│   ├── main.py                       # 入口：挂载 8 个 router + CORS + 启动建表
│   ├── config.py                     # pydantic-settings：.env + 运行时 JSON 配置
│   ├── db.py                         # aiosqlite 连接池 + WAL 模式 + 9 张表 DDL
│   ├── routers/                      # API 路由层（薄，只做参数校验 + 调 service）
│   │   ├── fund.py                   # 基金搜索 / 估值 / 净值 / 排名 / 风险 / 经理 / 规模
│   │   ├── holding.py                # 重仓股 / 行业分布 / 资产配置
│   │   ├── portfolio.py              # 交易记录 CRUD + 持仓汇总
│   │   ├── ai.py                     # 单基决策 / 组合建议 / 市场建议
│   │   ├── market.py                 # 市场复盘 / 板块基金匹配
│   │   ├── news.py                   # 新闻搜索 / 基金关联新闻 / AI 综合
│   │   ├── review.py                 # 交易复盘
│   │   └── settings.py               # 系统配置读写
│   ├── services/                     # 业务逻辑层（核心代码）
│   │   ├── em_crawler.py             # 东方财富 + 腾讯行情 + 新浪 K 线 异步爬虫
│   │   ├── estimate_svc.py           # 盘中实时估值引擎（多层级兜底）
│   │   ├── portfolio_svc.py          # 持仓汇总 + 成本核算 + 今日盈亏
│   │   ├── indicator.py              # pandas 计算 MA / RSI / MACD / 夏普 / 最大回撤
│   │   ├── ai_svc.py                 # OpenAI 兼容 SDK 封装 + Prompt 模板 + 降级策略
│   │   ├── news_svc.py               # 多搜索引擎封装 + 关键词扩展
│   │   ├── market_svc.py             # 指数 / 板块 / 北向资金 + 板块基金匹配
│   │   ├── review_svc.py             # 交易复盘后视镜 + AI 评价
│   │   └── akshare_svc.py            # AkShare 净值 / 规模 / 经理封装
│   └── models/schemas.py             # 全部 Pydantic 数据模型（15+）
└── frontend/
    └── src/
        ├── views/                    # 8 个页面
        │   ├── Dashboard.vue         # 首页：持仓汇总 + 交易 + AI 组合诊断
        │   ├── FundDetail.vue        # 基金详情
        │   ├── Holding.vue           # 持仓分析
        │   ├── AIDashboard.vue       # AI 决策仪表盘
        │   ├── MarketReview.vue      # 市场复盘
        │   ├── TradeReview.vue       # 交易复盘
        │   ├── News.vue              # 新闻
        │   └── Settings.vue          # 设置
        ├── components/               # 6 个可复用组件
        ├── stores/                   # Pinia store（fund / refresh）
        ├── api/index.ts              # axios 实例 + 统一拦截
        └── router/index.ts           # Vue Router
```

---

## 核心模块

### 1. 盘中实时估值引擎（EstimateService）

这是整个系统最复杂也最核心的模块。Dashboard 和 FundDetail 页面的「估算涨跌幅」和「今日预估收益」都依赖它。

**估值优先级**（从高到低）：

```
① 今日净值已公布      → actual_nav        （官方当日实际涨跌幅，最准）
② 有前十大重仓股      → top10_weighted    （重仓股行情加权，主力方案）
③ 指数型基金          → index_track       （跟踪指数实时涨跌）
④ ETF 联接基金        → etf_track         （同指数场内 ETF 代理，兜底）
⑤ 东财官方估值        → em_estimate       （兜底方案）
⑥ 覆盖率 < 15%        → unsupported       （纯债 / 货基，不支持估值）
```

**加权算法**：

```
估算涨跌幅 = Σ(重仓股实时涨跌幅 × 占净值比例) / Σ(已覆盖占比)
估算净值   = 最新公布净值 × (1 + 估算涨跌幅 / 100)
```

**加权算法核心代码**（`estimate_svc.py:259-273`）：

```python
# 加权估算：对已取到行情的成分做「占比加权平均涨跌幅」
# gszzl = Σ(c_i * r_i) / Σ(r_i)，r_i 为占净值比例（%），
# 未覆盖部分默认与已覆盖部分同涨跌
gszzl = 0.0
used_coverage = 0.0
for s in stocks:
    if s.change_pct is not None:
        gszzl += s.change_pct * s.ratio
        used_coverage += s.ratio
if used_coverage > 0:
    gszzl = gszzl / used_coverage
gszzl = round(gszzl, 2)
gsz = round(dwjz * (1 + gszzl / 100.0), 4)
supported = valid > 0 and used_coverage >= _MIN_COVERAGE
```

**兜底层级判断**（`estimate_svc.py:189-200`）：

```python
# 无股票重仓（债基/货基 / ETF 联接）或基础净值缺失 → 走兜底估值
if not holdings or coverage < _MIN_COVERAGE or not dwjz:
    actual = await self._actual_today(code, info, dwjz, nav_date)
    fallback = None if actual else await self._fallback_estimate(code, info)
    if actual:
        gszzl, gsz, prev_nav = actual
        method = "actual_nav"
    elif fallback:
        gszzl, method = fallback
        gsz = round(dwjz * (1 + gszzl / 100.0), 4)
    else:
        gszzl, gsz, prev_nav, method = None, dwjz, real_prev_nav or dwjz, "unsupported"
```

为什么要用「占比加权平均」而不是直接求和？因为季报只披露前十大重仓股（覆盖率约 50%~90%），未披露部分默认与已覆盖部分同涨跌，避免系统性偏低。

**估值引擎并发主流程**（`estimate_svc.py:170-173`）：

```python
# 基础信息（净值/名称）与季报重仓股并发获取
info, (quarter, holdings) = await asyncio.gather(
    crawler.get_basic_info(code), _load_top_holdings(code)
)
```

重仓股行情用腾讯 `qt.gtimg.cn` 批量接口（一次 50 只），东财 push2 多节点轮询兜底；行业分类用东财 F10 接口获取，内存常驻缓存（行业长期稳定不变）。估值结果写入 SQLite `fund_estimate_cache`，TTL **180 秒**；季报重仓股内存缓存 **12 小时**，行业内存常驻。

组合页面并发拉取多只基金估值时，用 `asyncio.Semaphore(4)` 限流避免行情接口被限速（`portfolio_svc.py:144-151`）：

```python
sem = asyncio.Semaphore(4)

async def _fetch_est(code: str):
    async with sem:
        return await estimate_service.get_estimate(code)

ests = await asyncio.gather(*[_fetch_est(code) for code, _ in holdings])
```

**交易日判断**：用 AkShare 获取交易日历，内存缓存 6 小时。非交易日时估算涨跌幅置空，今日预估也归零。

### 2. 持仓汇总与成本核算（PortfolioService）

用户录入买入/卖出交易记录后，系统自动汇总：

- **剩余份额**：买入累加，卖出按先进先出扣减
- **持仓成本**：买入累加金额 + 费率；卖出按当前平均成本扣减
- **平均成本净值** = 剩余成本 / 剩余份额
- **持仓市值** = 剩余份额 × 估算/实际净值
- **累计盈亏** = 市值 − 成本
- **今日预估收益** = 份额 × (今日参考净值 − 上一交易日净值)

**成本聚合核心代码**（`portfolio_svc.py:122-135`）：

```python
agg: Dict[str, dict] = {}
for t in trades:
    a = agg.setdefault(t.code, {"shares": 0.0, "cost": 0.0})
    if t.type == "buy":
        a["shares"] += t.shares
        a["cost"] += t.amount + (t.fee or 0)
    else:  # sell：按当前平均成本扣减
        avg_cost = a["cost"] / a["shares"] if a["shares"] > 0 else 0
        a["cost"] -= avg_cost * t.shares
        a["cost"] += t.fee or 0   # 赎回费计入成本消耗
        a["shares"] -= t.shares
    a["cost"] = max(a["cost"], 0.0)
```

**今日预估收益计算**（`portfolio_svc.py:167-178`）：

```python
# 今日收益 = (参考净值 - 上一交易日净值) × 份额
is_trade = _is_trade_day()
prev_nav = est.prev_nav or est.dwjz
today_pnl = (
    round(((cur_nav or 0) - prev_nav) * shares, 2)
    if est.supported and prev_nav and is_trade
    else 0.0
)
today_pnl_pct = (
    est.gszzl if (est.supported and is_trade and est.gszzl is not None) else None
)
```

今日预估用 `prev_nav` 作为基准，保证只算当日真实涨跌，不会因为估值叠加在上一交易日净值上而重复计算。组合总收益率按「昨日总资产」口径而非今日收盘市值口径，更贴近真实的盘中盈亏感知。

### 3. AI 决策（AIService）

通过 OpenAI 兼容 SDK 调用 LLM，强制 `response_format={"type":"json_object"}` 输出结构化 JSON，再用 **Pydantic 校验**。

**三套 Prompt 模板**：

| 能力 | 输入 | 输出 | 缓存 |
|------|------|------|------|
| 单基买卖决策 | 净值序列 + 风险指标 + 经理 + 估值 + 新闻 | Decision（buy/sell/hold + confidence + checklist + 买卖建议） | 按日缓存 |
| 组合诊断 | 完整持仓汇总（每只基金市值 + 盈亏 + 排名） | PortfolioAdvice（每只基金加仓/减仓/持有 + 组合风险） | 不缓存 |
| 市场解读 | 指数 + 板块涨跌 + 北向资金 + 主力资金 | MarketAdvice（情绪 + 机会 + 风险 + 策略） | 按日缓存 |

**AI 调用 + JSON 强制输出 + 降级**（`ai_svc.py:62-106`）：

```python
try:
    response = await client.chat.completions.create(
        model=ai_cfg.get("model"),
        messages=[
            {"role": "system", "content": self._get_system_prompt()},
            {"role": "user", "content": prompt},
        ],
        response_format={"type": "json_object"},   # 强制 JSON 输出
        temperature=ai_cfg.get("temperature", 0.3),
    )
    content = response.choices[0].message.content
    data = json.loads(content)

    # Pydantic 校验 —— 字段缺失/类型错误直接降级
    decision = Decision(
        code=code, date=today,
        summary=data.get("summary", ""),
        signal=data.get("signal", "hold"),
        confidence=data.get("confidence", 0.5),
        checklist=[CheckItem(**item) for item in data.get("checklist", [])],
        risk_flags=data.get("risk_flags", []),
        buy_timing=data.get("buy_timing", ""),
        stop_loss=data.get("stop_loss", ""),
        target_return=data.get("target_return", ""),
    )
    # 按日缓存到 SQLite
    await db.execute(
        "INSERT OR REPLACE INTO ai_decision (code, date, payload_json) VALUES (?, ?, ?)",
        (code, today, decision.model_dump_json()),
    )
    return decision

except (ValidationError, json.JSONDecodeError) as e:
    return self._fallback_decision(code, today, risk_data)
```

**System Prompt 内置投资理念**（`ai_svc.py:108-128`）：

```python
def _get_system_prompt(self) -> str:
    return """你是一名专业的基金投资分析师。请根据提供的数据，给出客观、理性的投资建议。

必须遵守以下投资理念：
1. 严禁追高：短期涨幅 > 10% 的基金标记为「危险」，不建议买入
2. 趋势投资：中长期趋势向上，回调时买入
3. 精确时机：结合 MA、RSI、MACD 等技术指标给出买卖时机
4. 检查清单：对每项条件用 ✅⚠️❌ 标记

输出必须是严格的 JSON 格式，包含以下字段：
- summary: 一句话核心结论
- signal: "buy" | "sell" | "hold"
- confidence: 0-1 之间的置信度
- checklist: 数组，每项包含 item(检查项), status("pass"|"warn"|"fail"), note(说明)
...
"""
```

AI 决策不是黑盒，是有规则约束的：system prompt 里写死了四条投资原则，LLM 必须输出 JSON 且字段不能编造，Pydantic 再兜底校验。这样即使换不同的 LLM 提供商，输出格式和逻辑也能保持一致。

### 4. 多数据源爬虫（EastMoneyCrawler）

用 httpx 异步实现，封装了以下接口：

| 接口 | 用途 | 数据源 |
|------|------|--------|
| FundMNNBasicInformation | 基金基础信息（含风险指标、规模、跟踪指数） | 东财移动端 WAP |
| FundMNHisNetList | 历史净值 | 东财移动端 WAP |
| FundMNFInfo | 基金实时估值（官方） | 东财移动端 WAP |
| pingzhongdata/*.js | 基金经理履历、规模历史、资产配置 | 东财 PC 端 |
| push2.eastmoney.com | 个股/指数实时行情（多节点轮询） | 东财 PC 端 |
| qt.gtimg.cn | 个股实时行情（兜底，GBK 编码） | 腾讯 |
| CN_MarketData.getKLineData | 个股 K 线（新浪，兜底） | 新浪 |

**push2 多节点轮询**（`em_crawler.py:202-221`）：

```python
_PUSH2_HOSTS = [
    "push2.eastmoney.com",
    "82.push2.eastmoney.com",
    "1.push2.eastmoney.com",
]

async def _push2_get(self, params: dict, retries_per_host: int = 1, timeout: float = 6.0):
    for host in self._PUSH2_HOSTS:
        for attempt in range(retries_per_host + 1):
            try:
                async with httpx.AsyncClient(timeout=timeout) as client:
                    resp = await client.get(
                        f"https://{host}/api/qt/stock/get",
                        params=params,
                        headers={"User-Agent": _HEADERS_PC["User-Agent"]},
                    )
                    return resp.json()
            except Exception:
                break
    return None
```

**数据源可切换 + 腾讯兜底**（`em_crawler.py:236-283`）：

```python
async def get_stock_quote(self, stock_code: str) -> Optional[dict]:
    """数据源由 settings.data_sources.stock_quote.value 决定"""
    src = settings.get_source("stock_quote") or "tencent"
    if src == "eastmoney":
        return await self._get_stock_quote_em(stock_code)
    return await self._get_stock_quote_tx(stock_code)

async def _get_stock_quote_tx(self, stock_code: str) -> Optional[dict]:
    """腾讯行情兜底（qt.gtimg.cn，GBK 编码）"""
    mk = _tencent_code(stock_code)
    if not mk:
        return None
    try:
        async with httpx.AsyncClient(timeout=5) as client:
            resp = await client.get(
                f"https://qt.gtimg.cn/q={prefix}{stock_code}",
                headers=_HEADERS_PC,
            )
            resp.encoding = "gbk"   # ← 腾讯行情的坑点
            text = resp.text
    except Exception:
        return None
    m = re.search(r'="([^"]*)"', text)
    return _parse_tx_quote(m.group(1).split("~"), market_name) if m else None
```

**批量重仓股行情**（`em_crawler.py:285-318`）：一次 HTTP 请求拉取 50 只重仓股的实时涨跌，避免逐只建立 TCP 连接，估值引擎里直接复用这个字典。

```python
async def get_stock_quotes(self, codes: List[str]) -> Dict[str, dict]:
    for i in range(0, len(items), 50):
        chunk = items[i : i + 50]
        symbols = ",".join(key for key, _ in chunk)
        async with httpx.AsyncClient(timeout=8) as client:
            resp = await client.get(
                f"https://qt.gtimg.cn/q={symbols}", headers=_HEADERS_PC
            )
            resp.encoding = "gbk"
            # ... 解析 v_xxx="~~分隔字段..." 格式
    return result
```

**反爬策略**：UA 池 + 请求间随机延迟 1~3 秒 + 失败自动重试（push2 内部每个 host 重试一次，三次 60% 线性退避）。

### 5. 新闻智能关联

用户搜索或查看基金时，系统会自动：

1. 从季报重仓股取前 5 只股票名称 + 所属行业
2. 拼接关键词（股票名 + 行业 + 基金主题）喂给 Tavily / Bocha 搜索
3. 把搜索结果 + 基金持仓信息喂给 LLM
4. LLM 输出每条新闻的「利好 / 利空 / 中性」判断 + 操作建议

### 6. 市场复盘

每日拉取：上证指数、深证成指、创业板、沪深300 + 板块涨跌 TOP10 + 北向资金净流入 + 主力资金流向。板块基金匹配：按板块关键词在基金搜索接口中匹配重仓相关行业的基金。

---

## 数据库设计

**WAL 模式 + busy_timeout 解决 SQLite 并发**（`db.py:13-24`）：

```python
async def get_db() -> aiosqlite.Connection:
    db = await aiosqlite.connect(str(DB_PATH), timeout=30)
    db.row_factory = aiosqlite.Row
    # 并发读写时等待锁而不是立刻报 "database is locked"
    await db.execute("PRAGMA busy_timeout=30000")
    return db

async def init_db() -> None:
    db = await get_db()
    # WAL 允许多读单写并发，避免各请求都新建连接时互相阻塞
    await db.execute("PRAGMA journal_mode=WAL")
    # CREATE TABLE IF NOT EXISTS 9 张表 ...
```

之前默认 journal 模式下，多个并发请求（例如 Dashboard 同时拉取估值 + AI 决策 + 持仓汇总）会频繁出现 `database is locked`，加了 WAL 之后基本就没再碰到这个问题了。

**技术指标计算**（`indicator.py:30-47`）：量化风险指标直接用 pandas/numpy，一行 pandas 搞定最大回撤。

```python
# 年化收益
total_return = (df["nav"].iloc[-1] / df["nav"].iloc[0]) - 1
annual_return = (1 + total_return) ** (365 / total_days) - 1
# 波动率（年化）
volatility = df["daily_return"].std() * np.sqrt(252)
# 夏普比率（无风险利率 3%）
sharpe = (annual_return - risk_free_rate) / volatility
# 最大回撤 —— pandas 一行
cummax = df["nav"].cummax()
drawdown = (df["nav"] - cummax) / cummax
max_dd = abs(drawdown.min())
```

| 表名 | 用途 | 缓存策略 |
|------|------|----------|
| `fund_info` | 基金基础信息 | TTL 30 天 |
| `nav_history` | 历史净值序列 | TTL 1 天 |
| `holding` | 季报重仓股 | 季度更新 |
| `industry_dist` | 行业分布 | 季度更新 |
| `asset_alloc` | 资产配置（股/债/现） | 季度更新 |
| `ai_decision` | AI 决策 | 按日缓存 |
| `news_cache` | 新闻搜索结果 | 按 query_hash 缓存 |
| `market_daily` | 每日市场数据 | 按日缓存 |
| `trade` | 用户交易记录 | 用户录入 |
| `fund_estimate_cache` | 实时估值 | TTL 180 秒 |

---

## 页面一览

| 页面 | 路由 | 核心功能 |
|------|------|----------|
| **持仓首页** | `/` | 持仓汇总卡片（成本/市值/盈亏/今日预估）+ 持仓表格（含排序、列宽拖动）+ AI 组合诊断 |
| **基金详情** | `/fund/:code` | 净值走势（ECharts，多周期切换）+ 实时估值卡片 + 风险指标 + 基金经理 + 规模曲线 |
| **持仓分析** | `/fund/:code/holding` | 前十大重仓股表格（含较上期变动）+ 行业分布饼图 + 资产配置条 |
| **AI 决策** | `/fund/:code/ai` | 一句话核心结论 + 买卖信号仪表盘 + ✅⚠️❌ 检查清单 + 买卖时机/止损/目标收益 |
| **市场复盘** | `/market` | 四大指数卡片 + 板块涨跌 TOP10 + 北向资金 + 主力资金 + AI 市场情绪 |
| **交易复盘** | `/review` | 所有交易记录 + 后视镜（当前 vs 交易时）+ AI 评价（好/一般/差） |
| **新闻** | `/news` | 全局搜索 + 基金关联新闻 + AI 综合判断 |
| **设置** | `/settings` | AI 提供商（6 家可切换）+ 搜索引擎（4 家）+ 数据源选择 + 缓存策略 |

---

## 关键设计决策

### 1. 数据源可切换

在 Settings 页面，用户可以为不同数据类型选择不同的数据源：
- 股票 K 线：新浪 / 腾讯 / 东财
- 股票行情：腾讯 / 东财
- AI：DeepSeek / OpenAI / 阿里百炼 / 智谱 / 豆包 / 自定义
- 搜索：Tavily / Bocha / Serper / SerpAPI

后端 `get_source(key)` 统一读取，爬虫内部根据配置分发。这样东财 push2 被运营商 DNS 污染时可以快速切到腾讯。

### 2. 配置分层

- **系统级**（`.env`）：API Key、数据库路径、爬虫参数——部署相关，不进前端
- **运行时**（`settings.json`）：AI 提供商、数据源选择、缓存 TTL——前端 Settings 页面可改

**AppConfig 配置分层核心代码**（`config.py:175-234`）：

```python
# ---- 系统级：.env 里的不可变字段 ----
class SystemSettings(BaseSettings):
    openai_api_key: str = ""
    openai_base_url: str = "https://api.deepseek.com/v1"
    sqlite_path: str = "./data/fund.db"
    em_ua_pool: str = "Mozilla/5.0 ..."
    model_config = SettingsConfigDict(env_file=(".env", "../.env"))

# ---- 运行时：可持久化、可在前端修改 ----
class AppConfig(SystemSettings):
    ai: AISection           # provider / model / base_url / api_key
    search: SearchSection   # tavily / bocha / serper 等
    refresh: RefreshSection
    data_sources: dict[str, DataSource]   # stock_kline / stock_quote / fund_estimate ...
    cache: CacheSection     # TTL 可配

    def get_source(self, key: str) -> str:
        ds = self.data_sources.get(key)
        return ds.value if ds else ""

    def update_section(self, section: str, patch: dict) -> dict:
        # 深合 patch → 写回 JSON → 持久化
        current = getattr(self, section)
        data = current.model_dump()
        for k, v in patch.items():
            if k in data:
                data[k] = v
        setattr(self, section, type(current).model_validate(data))
        self.save()
        return getattr(self, section).model_dump()
```

**单例加载 + JSON 覆盖**（`config.py:283-312`）：

```python
def _build_config() -> AppConfig:
    cfg = AppConfig()               # 先从 .env 加载
    if SETTINGS_FILE.exists():
        file_data = json.loads(SETTINGS_FILE.read_text(...))
        for section_name in ("ai", "search", "refresh", "data_sources", "cache"):
            if section_name in file_data:
                model_class = AppConfig.model_fields[section_name].annotation
                validated = model_class.model_validate(file_data[section_name])
                setattr(cfg, section_name, validated)  # JSON 覆盖 .env 默认值
    return cfg

@lru_cache
def get_settings() -> AppConfig:
    return _build_config()
```

这种分层设计让部署相关（API Key、数据库路径）和运行时配置（AI 提供商、数据源选择）完全解耦：前者 `.env` 里放一份就行，后者用户可以在 Settings 页面随时改并持久化到 `settings.json`。

### 3. 估值兜底层级

纯债基金 / 货币基金没有股票持仓，直接走 `unsupported` 标记。主动型基金如果覆盖率极低（< 15%），优先尝试：跟踪指数实时涨跌 → 同指数场内 ETF → 东财官方盘中估值。三层都失败才标记不支持。

### 4. 前端 Table 排序空值处理

Element Plus Table 的 `sort-method` 把 `null` 映射到 `-9e9`，不支持估值的基金自动排到末尾，不打断排序直观性。

### 5. Element Plus 排序列样式覆盖

默认排序列箭头是 `position: absolute` 叠在 cell 文字下方。改成 `inline-flex` 让箭头跟在表头文字右侧同行显示。

---

## 运行方式

```bash
# 后端
cd backend
python -m venv .venv && .venv\Scripts\activate    # Windows
pip install fastapi uvicorn httpx aiosqlite pydantic pydantic-settings akshare pandas numpy openai
uvicorn main:app --reload --port 8000

# 前端
cd frontend
npm install
npm run dev    # http://localhost:5173
```

`.env` 最少需要配一个 LLM Key 才能用 AI 功能，新闻功能需要配一个搜索 Key。不配也能跑，只是 AI 和新闻会降级。

---

## 踩过的坑

1. **东财 push2 接口在部分网络不可达**：阿里云服务器能通，本地宽带被 DNS 污染。解决：腾讯行情兜底 + 多节点轮询。
2. **腾讯行情 GBK 编码**：`resp.encoding = "gbk"` 才能正确解析。
3. **AI 输出不稳定**：早期用自由文本 prompt，偶尔不返回 JSON。解决：`response_format={"type":"json_object"}` 强制 + Pydantic 校验 + 解析失败重试 1 次再降级。
4. **SQLite WAL 模式**：默认 journal 模式下多请求并发会出现 `database is locked`。解决：启动时 `PRAGMA journal_mode=WAL` + `busy_timeout=30000`。
5. **FundMNNBasicInformation 返回 RZDF 字段部分基金缺失**（如 C 份额、新基金）：解决：用历史净值反推上一交易日涨跌。
6. **交易时卖出按先进先出扣减成本**：早期用加权平均成本，后来改成 FIFO 更符合税务口径。

---

## 如果继续迭代

- [ ] 净值曲线和 AI 决策关联（在净值图上标注 AI 给出的买卖点）
- [ ] 定时任务 + 微信推送（每日开盘前推送估值、收盘后推送持仓盈亏汇总）
- [ ] 多账户支持（当前是单用户单账户）
- [ ] 导入导出（交易记录 CSV 批量导入）
- [ ] 技术指标参数可配置（MA 周期、RSI 阈值）
- [ ] 行情 WebSocket 推送（目前是定时轮询）

> ⚠️ 免责声明：本工具仅供个人投资研究参考，不构成任何投资建议。基金投资有风险，入市需谨慎。