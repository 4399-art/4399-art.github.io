



# CI/CD 流水线实战笔记

> 技术栈：**Git + Jenkins + Docker**
> 目标：实现 CI/CD（持续集成/持续部署）的流行技术栈。其核心流程是：开发者推送代码至 Git（GitHub/GitLab），触发 Jenkins 自动从 Git 拉取代码，通过 Docker 构建镜像并推送到镜像仓库，最后由 Jenkins 远程或在本地部署新镜像，实现了代码提交部署的一键化管理

[基于jenkins+docker实现CI/CD](https://www.cuiliangblog.cn/detail/article/83)

------

## 二、Jenkins 核心概念速览（重点）

### 1️⃣ Jenkins Job 类型

- **Pipeline**（推荐 ⭐）
  - Pipeline Script（脚本式）
  - Pipeline from SCM（生产常用）

> 实战中统一使用 **Declarative Pipeline（声明式流水线）**

------

## 三、Jenkins 触发器（重点）

### 1️⃣ 触发器是什么？

> **Trigger 决定“什么时候跑流水线”**

常见触发方式：

| 触发器        | 使用场景           | 是否推荐 |
| ------------- | ------------------ | -------- |
| 手动构建      | 测试 / 临时        | ⭐⭐⭐      |
| Poll SCM      | Jenkins 定时拉 Git | ❌ 不推荐 |
| Webhook       | Git 推送自动触发   | ⭐⭐⭐⭐⭐    |
| 定时构建      | 夜间构建 / 扫描    | ⭐⭐⭐      |
| 上游 Job 触发 | 多流水线依赖       | ⭐⭐⭐⭐     |

------

### 2️⃣ Git Webhook 触发（最重要）

#### 原理

```
Git Push → Webhook → Jenkins API → 触发 Pipeline
```

#### Jenkins 配置

**Job → Build Triggers**

勾选：

- `GitHub hook trigger for GITScm polling`
- 或 `Generic Webhook Trigger`

#### Git 仓库配置

Webhook URL：

```
http://jenkins.example.com/github-webhook/
```

> ⚠️ Webhook 需要 Jenkins 可被 Git 仓库访问（公网 / 内网穿透）

------

### 4️⃣ 定时触发（Cron）

```groovy
triggers {
    cron('H 2 * * *')
}
```

**使用场景：**

- 夜间构建
- 定期安全扫描
- 自动化巡检

------

## 四、Jenkins Pipeline 核心语法（重点）

### 1️⃣ 基本结构（声明式）

```groovy
pipeline {
    agent any

    triggers {
        // 触发器配置
    }

    environment {
        IMAGE_NAME = "demo-app"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
    }

    post {
        success {
            echo '构建成功'
        }
        failure {
            echo '构建失败'
        }
    }
}
```

------

### 2️⃣ agent 详解

```groovy
agent any              // 任意节点
agent none             // 每个 stage 自定义
agent { label 'docker' } // 指定节点
```

Docker 场景：

```groovy
agent {
    docker {
        image 'maven:3.9.6-jdk-17'
    }
}
```

------

### 3️⃣ stages & steps

- **stage**：阶段（逻辑分组）
- **steps**：具体执行命令

```groovy
stage('Test') {
    steps {
        sh 'mvn test'
    }
}
```

------

### 4️⃣ environment 环境变量

```groovy
environment {
    REGISTRY = 'harbor.example.com'
    TAG = "${BUILD_NUMBER}"
}
```

可用于：

- 镜像名称
- 账号信息（配合 Credentials）

------

## 五、Git + Jenkins + Docker 实战流水线

### 1️⃣ Jenkinsfile 示例（重点）

```groovy
pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        IMAGE_NAME = "demo-app"
        TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t demo-app:${TAG} .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop demo-app || true
                docker rm demo-app || true
                docker run -d -p 8080:8080 --name demo-app demo-app:${TAG}
                '''
            }
        }
    }
}
```

------

## 六、Jenkins 凭据管理（必会）

### 1️⃣ Credentials 类型

- Username/Password
- SSH Key
- Secret Text（Token）

### 2️⃣ Pipeline 中使用

```groovy
withCredentials([
    usernamePassword(
        credentialsId: 'docker-hub',
        usernameVariable: 'USER',
        passwordVariable: 'PASS'
    )
]) {
    sh 'docker login -u $USER -p $PASS'
}
```

------

## 七、Pipeline 最佳实践

✅ Jenkinsfile 必须放在 Git 仓库

✅ 一个 stage 只做一件事

✅ 镜像 Tag 使用：

- `BUILD_NUMBER`
- `Git Commit ID`

✅ 所有敏感信息使用 Credentials

✅ Pipeline 失败要 **快速失败（Fail Fast）**

------

## 八、常见问题总结

### 1️⃣ Webhook 不触发？

- Jenkins 地址是否可访问
- Webhook URL 是否正确
- Jenkins 是否开启对应 Trigger

### 2️⃣ Docker 命令无权限？

```bash
usermod -aG docker jenkins
```

------

## 九、CI/CD 面试高频考点速记（重点）

> 本章节用于 **系统性复习 + 面试速答**，围绕 Jenkins 的“为什么 + 怎么做 + 风险点”。

------

### 1️⃣ 什么是 CI/CD？

**CI（Continuous Integration）持续集成**：

- 频繁提交代码
- 自动构建 + 自动测试
- 尽早发现问题

**CD（Continuous Delivery / Deployment）**：

- 自动打包
- 自动部署
- 可随时发布

👉 Jenkins 在其中的角色：**自动化调度与执行中心**

------

### 2️⃣ Jenkins 在 CI/CD 中做了什么？

一句话回答：

> Jenkins 通过 **Trigger 触发流水线**，按 **Pipeline 定义的步骤** 自动完成构建、测试、镜像制作和部署。

展开答：

- 监听代码变更（Webhook / Poll SCM）
- 分阶段执行任务（Stage）
- 统一日志、失败回溯
- 管理凭据、环境变量

------

### 3️⃣ Jenkins 为什么用 Pipeline？

面试标准答法：

- Pipeline **即代码（Pipeline as Code）**
- 可版本控制、可回滚
- 复用性强
- 比 Freestyle 可维护性高

补充：

- Declarative Pipeline 可读性强
- Scripted Pipeline 灵活但复杂

------

### 4️⃣ Jenkins 触发器（必问 ⭐⭐⭐⭐⭐）

#### 常见触发方式

| 触发器   | 是否推荐 | 面试评价 |
| -------- | -------- | -------- |
| 手动触发 | ⭐⭐⭐      | 辅助     |
| Poll SCM | ⭐        | 过时方案 |
| Webhook  | ⭐⭐⭐⭐⭐    | 标准答案 |
| Cron     | ⭐⭐⭐      | 补充方案 |

#### 面试回答模板

> 实际生产中主要使用 **Git Webhook 触发 Jenkins Pipeline**，避免 Poll SCM 带来的资源浪费和延迟。

------

### 5️⃣ Webhook vs Poll SCM（对比必会）

| 对比点   | Webhook        | Poll SCM         |
| -------- | -------------- | ---------------- |
| 触发方式 | Git 推送即通知 | Jenkins 定时拉取 |
| 实时性   | 高             | 低               |
| 资源消耗 | 低             | 高               |
| 是否推荐 | ✅              | ❌                |

一句话总结：

> 能用 Webhook 就不用 Poll SCM。

------

### 6️⃣ Jenkinsfile 放在哪里？为什么？

标准答案：

> Jenkinsfile 必须放在 **Git 仓库根目录**，和业务代码一起管理。

原因：

- 配置即代码
- 环境一致性
- 回滚安全
- 多人协作

------

### 7️⃣ Jenkins Pipeline 核心结构（背下来）

```groovy
pipeline {
    agent any
    triggers { }
    environment { }
    stages { }
    post { }
}
```

面试官追问时可展开：

- agent：在哪跑
- stages：跑什么
- post：失败/成功处理

------

### 8️⃣ Jenkins 如何保证安全？

答题要点：

- Credentials 统一管理
- Jenkinsfile 不写明文密码
- 最小权限原则
- 节点隔离（Label / Docker Agent）

示例：

```groovy
withCredentials([string(credentialsId: 'token', variable: 'TOKEN')]) {
    sh 'echo $TOKEN'
}
```

------

### 9️⃣ Jenkins + Docker 的好处

面试官想听：

- 环境一致
- 构建隔离
- 不污染宿主机
- 快速回滚

一句话：

> Jenkins 负责调度，Docker 负责标准化运行环境。

------

### 🔟 常见线上问题 & 回答思路

**Q：Pipeline 失败你怎么排查？**

答：

- 查看 Stage 日志
- 定位失败步骤
- 本地复现
- 增加失败通知

**Q：如何实现回滚？**

答：

- Docker 使用历史镜像 Tag
- Jenkins 记录构建版本
- 一键重新部署指定版本

------

## 十、一分钟 Jenkins 面试总结

> Jenkins = **触发器 + Pipeline + 自动化执行**

生产推荐：

- Webhook 触发
- Declarative Pipeline
- Jenkinsfile in Git
- Docker 化构建

如果你能把上面几点说清楚，**80% Jenkins 面试稳过**。
