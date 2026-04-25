
# 📘 Ansible 实践案例

[**更换 CentOS YUM 源**](https://www.cnblogs.com/mq0036/p/18610547)

![image-20250816205616678](./assets/ansible_study/image-20250816205616678.png)

## 🧱 环境说明

| 节点角色   | IP 地址          | 描述           |
|------------|------------------|----------------|
| 控制节点   | 192.168.120.200  | 安装了 Ansible |
| 受控节点 1 | 192.168.120.201  | 目标服务器     |
| 受控节点 2 | 192.168.120.202  | 目标服务器     |

---

## 🛠️ 第一步：安装 Ansible（控制节点）

```bash
sudo yum install epel-release -y
sudo yum install ansible -y
ansible --version
```

---

## 🔐 第二步：配置 SSH 免密登录

在控制节点执行：

```bash
ssh-keygen -t rsa  # 一路回车
ssh-copy-id root@192.168.120.201
ssh-copy-id root@192.168.120.202
```

验证连通性：

```bash
ansible all -i '192.168.120.201,192.168.120.202,' -m ping -u root
```

---

## 📁 第三步：配置 Inventory 清单

编辑 `/etc/ansible/hosts`：

```ini
[webservers]
192.168.120.201 ansible_ssh_user=root
192.168.120.202 ansible_ssh_user=root
```

---

## 📦 第四步：创建网站部署 Playbook

### 📂 项目结构

```bash
ansible-project/
├── site/
│   └── index.html
└── deploy_nginx.yml
```

### ✏️ index.html 内容

```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Hello from Ansible!</h1>
</body>
</html>
```

### ✏️ deploy_nginx.yml Playbook 内容

```yaml
- name: 安装 nginx 并部署网页
  hosts: webservers
  become: yes

  tasks:
    - name: 安装 EPEL 仓库
      yum:
        name: epel-release
        state: present

    - name: 安装 nginx
      yum:
        name: nginx
        state: present

    - name: 拷贝网页文件
      copy:
        src: site/index.html
        dest: /usr/share/nginx/html/index.html
        owner: nginx
        group: nginx
        mode: '0644'

    - name: 启动并开启 nginx
      service:
        name: nginx
        state: started
        enabled: yes
```

---

## 👤 第五步：批量创建用户 Playbook

另建一个文件：`create_users.yml`

```yaml
- name: 批量创建用户
  hosts: webservers
  become: yes
  vars:
    users:
      - dev1
      - dev2
      - dev3

  tasks:
    - name: 创建用户
      user:
        name: "{{ item }}"
        state: present
        shell: /bin/bash
      loop: "{{ users }}"
```

---

## 🚀 第六步：执行 Playbook

在控制节点中运行：

```bash
ansible-playbook deploy_nginx.yml
ansible-playbook create_users.yml
```

---

## ✅ 第七步：验证效果

在浏览器访问：

```
http://192.168.120.201
http://192.168.120.202
```

网页应显示 “Hello from Ansible!”

---

## 📚 附录：常用命令

| 命令                              | 说明                      |
|-----------------------------------|---------------------------|
| `ansible all -m ping`             | 测试连通性               |
| `ansible-playbook xxx.yml`        | 执行 Playbook            |
| `ansible all -a "uptime"`         | 执行远程命令             |
| `ansible webservers -m shell -a "whoami"` | 指定组执行命令 |

## 错误收集

说明 **Playbook 文件的编码不是 UTF-8**，可能是 **Windows 下用 GBK 保存的** 文件，导致 Ansible 无法解析。

```
ERROR! Could not read playbook (deploy_nginx.yml) due to encoding issues: 'utf8' codec can't decode byte 0xb0 in position 8: invalid start byte
```

### 方法一：将文件转为 UTF-8 编码

#### 🖥 如果你在 Linux 上（CentOS、WSL、macOS）：

运行以下命令将文件转换为 UTF-8：

```
iconv -f gbk -t utf-8 deploy_nginx.yml -o deploy_nginx_utf8.yml
mv deploy_nginx_utf8.yml deploy_nginx.yml
```

### 无法访问部署的网页

#### 总结排查清单

| 检查项             | 命令或说明                             |
| ------------------ | -------------------------------------- |
| 网络是否连通       | `ping 192.168.120.201`                 |
| Nginx 是否安装     | `rpm -q nginx`                         |
| Nginx 是否运行     | `systemctl status nginx`               |
| 是否监听 80 端口   | `ss -tnlp                              |
| 防火墙是否放通端口 | `firewall-cmd --list-all`              |
| 网页是否部署成功   | `cat /usr/share/nginx/html/index.html` |
