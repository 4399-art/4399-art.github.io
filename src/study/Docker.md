# Docker

[IDEA使用Docker插件](https://blog.csdn.net/qq_40298902/article/details/106543208)

[官方文档](https://docs.docker.com/engine/reference/commandline/cli/) [译版](https://dockerdocs.cn/engine/reference/commandline/images/)

[从入门到实践](https://yeasy.gitbook.io/docker_practice/)

> **启动服务**：systemctl start docker

```
重启所有容器： docker restart $(docker ps -aq)
```

## 一. 安装

**[centos8安装docker](https://blog.csdn.net/zhongguootngxu/article/details/117881212)**

```
执行以下命令安装依赖包
sudo yum install -y yum-utils
```

阿里云镜像地址：

```
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

```
yum install docker-ce docker-ce-cli containerd.io --allowerasing
```

安装 Docker 引擎：yum list docker-ce

```
测试：sudo docker run hello-world
```

阿里云镜像加速：

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://5osyihlj.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

[docker基础](https://segmentfault.com/a/1190000038921337)

```
docker version   
docker info   #查看系统信息，包括镜像和容器数量
docker 命令 --help
```

## CentOS 7+查看防火墙状态命令

```
systemctl status firewalld
```

开启或关闭防火墙命令

* 开启命令：`systemctl start firewalld`
* 临时关闭命令：`systemctl stop firewalld`
* 永久关闭命令：`systemctl disable firewalld`

## 二. 镜像

​ **分层存储**

### 安装镜像

下载镜像：docker pull 镜像名

```
删除镜像： docker rmi 镜像名
报错执行：执行docker ps -a查看所有容器记录
执行命令docker rm container_ID先删除这容器
```

### Dockerfile 定制镜像

* [ ] ```docker
  FROM 镜像名
  一 shell 格式：RUN <命令>，就像直接在命令行中输入的命令一样
  二 exec 格式：RUN ["可执行文件", "参数1", "参数2"]，这更像是函数调用中的格式。

  构建镜像
  docker build [选项] <上下文路径/URL/->

  ```

  ```

### 运行

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190409105240610.jpg)

```
以**交互式模式**运行容器，然后在容器内执行/bin/bash命令
docker run -it  --name=centos7 centos /bin/bash

退出终端，直接输入 exit
```

#### 列出镜像

docker image ls

查看已安装镜像：docker images

```
[root@localhost ~]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        latest    fb5657adc892   3 months ago   680MB
redis         latest    7614ae9453d1   3 months ago   113MB
hello-world   latest    feb5d9fea6a5   6 months ago   13.3kB
[root@localhost ~]# docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        latest    fb5657adc892   3 months ago   680MB
redis         latest    7614ae9453d1   3 months ago   113MB
hello-world   latest    feb5d9fea6a5   6 months ago   13.3kB
```

#### 查看磁盘占用情况

docker system df

#### 删除镜像

```
 docker image rm [选项] <镜像1> [<镜像2> ...]
```

`<镜像>` 可以是 `镜像短 ID`、`镜像长 ID`、`镜像名` 或者 `镜像摘要`。

## 三. 容器

启动容器有两种方式，一种是基于镜像新建一个容器并启动，另外一个是将在终止状态（`exited`）的容器重新启动。

### 新建并启动

所需要的命令主要为 `docker run`。

启动一个 bash 终端，允许用户进行交互。

`--name` 标记可以为容器自定义命名

```
docker run -it ubuntu /bin/bash
```

### 启动已终止容器

> 查看容器是否启动

```
docker ps                        docker ps -a
```

伪终端中利用 `ps` 或 `top` 来查看进程信息。

清理掉所有处于**终止状态**的容器。  docker container prune

```
docker start [containID] # 启动停止的容器
docker stop [containID] # 停止运行的容器
删除容器   docker  rm [containID]
docker  kill [containID] # 对于那些不会自动终止的容器，必须手动终止

#--rm参数，在容器终止运行后自动删除容器文件  
 docker run --rm  -it centos /bin/bash
```

### 后台运行

* -d后台运行
* -it交互模式
* -p端口映射

```
部署tomcat :  docker run -d -p 8080:8080 tomcat  

解决docker阿里云镜像安装tomcat无法访问：
docker exec -it b02583e33796 /bin/bash			//进入运行的docker容器
cp -r webapps.dist/* webapps
```

运行本机测试

```
curl 127.0.0.1:8080
```

#### 运行mysql

```
 docker run -itd --name mysql-5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
 docker run -itd --name mysql-8.0 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:latest
```

## 四. 网络

### 端口映射

```
- p
```

### 容器互联

```
 docker network create -d bridge my-net         //-d 参数指定 Docker 网络类型
```

# nginx

nginx是一个高性能的HTTP和反向代理web服务器

* **反向代理**
* **负载均衡**
* **动静分离**

```
在docker 中配置说明：
www：nginx存储网站网页的目录
logs：nginx日志目录
conf：nginx配置文件目录

在本机创建：
mkdir -p /root/nginx/www /root/nginx/logs /root/nginx/conf
将 nginx容器配置文件copy到本地
docker cp b73f16629094:/etc/nginx/nginx.conf /root/nginx/conf
只能在容器关闭后才能做映射（映射）：

docker run -d -p 8081:80 -v /root/nginx/www:/usr/share/nginx/html  -v /root/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /root/nginx/logs:/var/log/nginx nginx
```

dcoker中运行： docker run -d -p 8081:80 nginx

**index.html**

```
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>系统时间</title>
</head>
<body>
<div id="datetime">
    <script>
        setInterval("document.getElementById('datetime').innerHTML=new Date().toLocaleString();", 1000);
    </script>
</div>
</body>　　
```

# zookeeper

```
docker pull zookeeper:latest
docker run -d --name zookeeper -p 2181:2181 zookeeper
```

# rabbitmq

[docker安装的rabbitmq无法访问问题](https://blog.51cto.com/u_4048786/3203468)

```
docker run -d  --name rabbitmq  -p 15672:15672 -p 5672:5672 rabbitmq
-d 后台运行容器
```

更好的一种方式，拉取一个带控制台的rabbitMQ

```
docker pull rabbitmq:3-management
docker run -d --name rabbitmqWithWeb -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

# PgSQL

```
docker run --name postgres-db -e TZ=PRC -e POSTGRES_USER=root -e POSTGRES_DB=database -e POSTGRES_PASSWORD=123456 -p 5432:5432 -v pgdata:/var/lib/postgresql/data -d postgres
```

# Mongo

```
创建mongo数据持久化目录
mkdir -p /docker_volume/mongodb/data

docker run -itd --restart=always -p 27017:27017 --name mongo -v /docker_volume/mongodb/data:/data/db mongo

docker exec -it mongo /bin/bash
```

# Redis

## 什么是Redis( 教程 )

redis是一款内存高速缓存数据库,是一个key-value存储系统，支持丰富的数据类型，如：String、list、set、zset、hash。

## centos7最小系统安装redis

**安装依赖库和基本组件**

安装wget

```
yum -y install wget　　#用来下载安装介质的，如果你是直接下载好然后放进去安装的你可以忽略这个，但是建议安装
```

=========================================================================

安装gcc

```
yum -y install gcc　　  #在编译Redis源码的时候如果没有安装gcc就会报错make cc Command not found，make: *** [adlist.o] Error这样的错误
```

=========================================================================

下载安装：

```
# wget http://download.redis.io/releases/redis-6.2.6.tar.gz
# tar xzf redis-6.2.6.tar.gz
# cd redis-6.0.8
# make
```

**docker run redis**

启动 redis 服务：

```
 cd src
 ./redis-server
```

后台启动：

```
./redis-server   /Ar/config/redis.conf(redis.conf文件全路径)
```

## error:

报错Address already in use 表示的6379端口被占用。

```
使用`ps -ef | grep -i redis`找到这个进程
kill -9 进程号
```

## 基础语法

### String字符串

> String是redis中最基本的数据类型，一个key对应一个value。

![image-20220304221218065](https://gitee.com/feeling-to/img/raw/master/typora/image-20220304221218065.png)

### List列表

> Redis中的List其实就是链表（Redis用双链表实现List）。

![image-20220304221359925](https://gitee.com/feeling-to/img/raw/master/typora/image-20220304221359925.png)

### Set集合

> Set 是 String 类型的无序集合。集合成员是唯一的。（哈希表实现的）

![image-20220304222104644](https://gitee.com/feeling-to/img/raw/master/typora/image-20220304222104644.png)

### Hash散列

> hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象。

![image-20220304222355650](https://gitee.com/feeling-to/img/raw/master/typora/image-20220304222355650.png)

著作权归https://pdai.tech所有。 链接：https://pdai.tech/md/db/nosql-redis/db-redis-data-types.html

### Zset有序集合

> Redis 有序集合和集合一样也是 string 类型元素的集合,且不允许重复的成员。不同的是每个元素都会关联一个 double 类型的分数。redis 正是通过分数来为集合中的成员进行从小到大的排序。

![image-20220304222707597](https://gitee.com/feeling-to/img/raw/master/typora/image-20220304222707597.png)

[docker基础]: