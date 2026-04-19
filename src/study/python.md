# Python

## Python基础语法

### 基本类型

> [!NOTE]
>
> Python中分为六种基本数据类型
>
> - 不可变类型（又叫静态数据类型，没有增删改操作）：数字(number)、字符串(string)、元组(tuple)
> - 可变类型（又叫动态数据类型，支持增删改操作）：列表(list)、字典(dictionary)、集合(set)

![image-20250726111107822](https://gitee.com/feeling-to/img/raw/master/typora/image-20250726111107822.png)

#### 字符串常用方法

`s.find("Wo")`查找子串首次出现的位置，不存在返回 `-1`

`str.split(sep)`按指定分隔符分割，返回列表

`str.replace(old, new)`替换子串

`str.strip()` 去除两边空白或指定字符

```
s = "  Hello, World!  "
print(s.strip())              # 去空格
print(s.replace("Hello", "Hi"))  # 替换
print(" ".join(["a", "b", "c"]))  # a b c
s.find("Wo")
```

#### [列表常用方法](https://www.cnblogs.com/x1you/p/12592358.html)

 **添加元素**

`append(x)`：在列表末尾添加一个元素

```
lst = [1, 2]
lst.append(3)   # [1, 2, 3]
```

`extend(iterable)`：扩展列表，添加另一个可迭代对象的所有元素

```
lst = [1, 2]
lst.extend([3, 4])   # [1, 2, 3, 4]
```

`insert(index, x)`：在指定位置插入元素

```
lst = [1, 3]
lst.insert(1, 2)   # [1, 2, 3]
```

**删除元素**

- `pop([index])`：删除并返回指定位置的元素，默认删除最后一个

  ```
  lst = [1, 2, 3]
  lst.pop()       # 返回 3，lst = [1, 2]
  lst.pop(0)      # 返回 1，lst = [2]
  ```

- `remove(x)`：删除列表中第一个值为 `x` 的元素

  ```
  lst = [1, 2, 3]
  lst.remove(2)   # [1, 3]
  ```

- `clear()`：清空列表

  ```
  lst = [1, 2, 3]
  lst.clear()     # []
  ```

------

✅ **查找元素**

- `index(x[, start[, end]])`：返回元素第一次出现的索引

  ```
  lst = ['a', 'b', 'c', 'b']
  lst.index('b')        # 1
  ```

- `count(x)`：返回元素在列表中出现的次数

  ```
  lst = [1, 2, 2, 3]
  lst.count(2)          # 2
  ```

------

✅ **排序与反转**

- `sort(reverse=False)`：对列表就地排序

  ```python
  lst = [3, 1, 2]
  lst.sort()            # [1, 2, 3]
  lst.sort(reverse=True) # [3, 2, 1]
  ```

- `sorted(lst)`：返回排序后的新列表，不修改原列表

  ```python
  sorted([3, 1, 2])     # [1, 2, 3]
  ```
  
- `reverse()`：原地反转列表

  ```
  lst = [1, 2, 3]
  lst.reverse()         # [3, 2, 1]
  ```

------

✅ **复制**

- `copy()`：返回列表的浅拷贝

  ```
  lst = [1, 2, 3]
  lst_copy = lst.copy()   # [1, 2, 3]
  ```

------

✅ **其他常用操作（非方法）**

- `len(lst)`：获取长度
- `in` / `not in`：判断元素是否存在
- 切片：`lst[start:end:step]`

### 条件判断

```python
age = 3
if age >= 18:
    print('your age is', age)
    print('adult')
else:
    print('your age is', age)
    print('teenager')
```

### 模式匹配

`match`

```python
score = 'B'

match score:
    case 'A':
        print('score is A.')
    case 'B':
        print('score is B.')
    case 'C':
        print('score is C.')
    case _: # _表示匹配到其他任何情况
        print('score is ???.')

```

### 循环

`for x in ...`

```
sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    sum = sum + x
print(sum)
```

`while`

```
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)
```

## 函数

```PY
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x

print(my_abs(-99))
```

### 递归函数

```py
def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)
```

## 高级特性

切片

含头不含尾`L[0:3]`表示，从索引`0`开始取，直到索引`3`为止，但不包括索引`3`。即索引`0`，`1`，`2`，正好是3个元素。

## 函数式编程

`map()`和`reduce()`

`educe`把一个函数作用在一个序列`[x1, x2, x3, ...]`上，这个函数必须接收两个参数，`reduce`把结果继续和序列的下一个元素做累积计算，其效果就是：

```python
reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
```

>>> from functools import reduce
>>> def add(x, y):
>>> ...     return x + y
>>> ...
>>> reduce(add, [1, 3, 5, 7, 9])
>>> 25

## 异常处理

`try...except...else...finally`结构

```PY
try:
    a = int(input('请输入第一个整数:'))
    b = int(input('请输入第二个整数:'))
    result = a / b
except BaseException as e:
    print('抛出异常，则执行except块',e)
else:
    print('try块中没有抛出异常,则执行else块:',result)
finally:
    print('无论是否发生异常都会被执行')
```

## [面向对象](https://frxcat.fun/pages/117f6e/)

# [Fastapi](https://fastapi.org.cn/)

# AI开发

## 基础

### Python 虚拟环境的创建（venv）

#### 移除所有第三方包（保留基础包）

```bash
# 导出所有包
pip freeze > all_packages.txt

# 卸载所有包
pip uninstall -r all_packages.txt -y
```

#### 创建虚拟环境（推荐做法）

⚠️ **重要提醒**：

- **系统 Python 解释器** 的包是全局安装的，移除可能影响其他项目
- 建议为每个项目创建独立的**虚拟环境**（venv）来隔离依赖
- 移除前确认包不是系统必需的

```bash
# 在项目目录创建虚拟环境
python -m venv .venv

# 激活虚拟环境
# Windows:
venv\Scripts\activate
```

然后在 PyCharm 中切换到该虚拟环境，后续安装的包就不会影响全局 Python 了。

退出虚拟环境

```sh
deactivate
```

### 聊天问答

#### 流式对话

```python
   stream=True
```

#### 多轮对话

1. **添加会话对象**：使用 `model.start_chat(history=[])` 创建一个会话对象，用于保持对话历史
2. **使用 send_message**：将 `generate_content` 替换为 `chat.send_message`，这样可以保持上下文

```python
#创建消息集合，用于存储对话历史记录
chat = model.start_chat(history=[])
    # 流式生成响应（保持上下文）
    response = chat.send_message(
        user_input,
        stream=True
    )
```

### Prompt

```json
{
    "system prompt": "你是一个幽默风趣的个人知识库助手，可以根据给定的知识库内容回答用户的提问，注意，你的回答风格应是幽默风趣的",
    "user prompt": "我今天有什么事务？"
}
```

- System Prompt 内容会在整个会话过程中持久地影响模型的回复，且相比于普通 Prompt 具有更高的重要性；
- User Prompt，这更偏向于我们平时提到的 Prompt，即需要模型做出回复的输入。

### Function Calling

**调用外部API、数据库或Python函数的能力，实现实时数据获取和复杂逻辑执行**

### RAG检索增强

![](https://gitee.com/feeling-to/img/raw/master/typora/1_1_1-1775008812601-2.svg)

## LangChain

![image-20260401101847188](https://gitee.com/feeling-to/img/raw/master/typora/image-20260401101847188.png)

### ① Models (模型)

LangChain 不直接提供模型，而是通过统一接口调用：

- 
- **Chat Models**: 用于对话的模型（如 GPT-4, Claude, Ollama）。输入输出通常为“消息对象”。
- **Embeddings**: 将文本转为向量的算法，是 RAG 的核心。

### ② Prompts (提示词)

提示词模板是控制 LLM 输出的关键：

- 
- **PromptTemplate**: 结构化输入，支持变量替换。
- **MessagesPlaceholder**: 用于多轮对话中动态插入历史聊天记录。

### ③ Retrieval (检索)

让 LLM 访问外部私有数据的过程：

- 
- **Loader**: 加载 PDF/Markdown/网页。
- **Splitter**: 将长文档切分为“块（Chunks）”。
- **Vector Store**: 向量数据库（如 FAISS, Chroma），用于存储和检索相似内容。

### ④ Memory (记忆)

让 AI 记住之前的对话：

- 
- **ChatHistory**: 存储消息列表（HumanMessage, AIMessage）。
- **Buffer**: 在新的一轮对话中将历史记录传递给模型。

### ⑤ Chains (链)

使用 **LCEL (LangChain Expression Language)** 将以上组件串联。

- 
- 语法：chain = prompt | model | parser (通过 | 管道符连接)。

### ⑥ Agents (智能体)

当 LLM 无法通过内部知识回答时，Agent 可以：

- 
- 调用外部工具（Google 搜索、运行 Python 代码）。
- 自主决定执行步骤。

------
