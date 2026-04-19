# linux

[进阶巩固](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)

## 一.常用

安装： yum install

参数信息：

-h 以人性化的方式显示文件大小

-r [recursive递归]递归方式删除目录

-f force强制，不需要额外的提示

查看网络信息 ifconfig /ip address

### sudo

sudo 允许一般用户使用 root 可执行的命令，不过只有在 /etc/sudoers 配置文件中添加的用户才能使用该指令。(visudo)

### PS

报告当前系统的进程状态

### du和df的区别

du（Disk Usage）和df（Disk Free）是Linux中两个核心磁盘分析工具。

- **df用于查看整个文件系统或分区的磁盘总体剩余空间**，速度快；
- **du用于统计特定文件或目录的磁盘空间占用情况**，支持递归查询。

### 求助

man --help

## 二. vim

![](https://www.runoob.com/wp-content/uploads/2014/07/vim-vi-workmodel.png)

## 三. linux 云端应用

> 天下大势，分久必合，合久必分

1. 大型主机分配数个终端机的集中运算机制
2. 运算都是在台式机或笔记本上自行达成
3. 数据需要集中处理，因而产生云端系统的需求！让资源集中管理

**鸟哥的私房菜**

## 四. linux 文件与目录管理

* cd：变换目录
* pwd：显示目前的目录
* mkdir：创建一个新的目录 -p(递归)
* rmdir：删除一个空的目录

### 文件类型

* d：目录
* -：文件
* l：链接文件

### 权限

* 文件默认权限：文件默认没有可执行权限，因此为 666。
* 目录默认权限：目录必须要能够进入，也就是必须拥有可执行权限，因此为 777

```
可以通过 umask 设置或者查看默认权限，通常以掩码的形式来表示，例如 002 表示其它用户的权限去除了一个 2 的权限，也就是写权限，因此建立新文件时默认的权限为 -rw-rw-r--。
```

### 搜索

指令搜索：

which

文件搜索：

whereis 速度比较快，因为它只搜索几个特定的目录。

locate 可以用关键字或者正则表达式进行搜索。

**find** 可以使用文件的属性和权限进行搜索。

文本搜索：

grep

### cp

-s 创建软链接

```
[ar@localhost ~]$ ls -l Demo1
-rw-rw-r--. 1 ar ar 0 11月 21 13:33 Demo1
[ar@localhost ~]$ cp -s Demo1 Demo1_slink  //软链接
[ar@localhost ~]$ cp -l Demo1 Demo1_hlink	//硬链接   （复写纸）

[ar@localhost ~]$ ls -l
总用量 0
-rw-rw-r--. 2 ar ar 0 11月 21 13:33 Demo1
-rw-rw-r--. 2 ar ar 0 11月 21 13:33 Demo1_hlink
lrwxrwxrwx. 1 ar ar 5 11月 21 13:35 Demo1_slink -> Demo1
```

### tar

压缩指令只能对一个文件进行压缩，而打包能够将多个文件打包成一个大文件。tar 不仅可以用于打包，也可以使用 gzip、bzip2、xz 将打包文件进行压缩。

```
tar -czvf test.tar.gz Demo1   //压缩 Demo1文件为test.tar.gz
tar -tzvf test.tar.gz   //查看压缩内容
tar -xzvf test.tar.gz  //解压

$ tar [-z|-j|-J] [cv] [-f 新建的 tar 文件] filename...  ==打包压缩
$ tar [-z|-j|-J] [tv] [-f 已有的 tar 文件]              ==查看
$ tar [-z|-j|-J] [xv] [-f 已有的 tar 文件] [-C 目录]    ==解压缩
-z ：使用 zip；
-j ：使用 bzip2；
-J ：使用 xz；
-c ：新建打包文件；
-t ：查看打包文件里面有哪些文件；
-x ：解打包或解压缩的功能；
-v ：在压缩/解压缩的过程中，显示正在处理的文件名；
-f : filename：要处理的文件；
-C 目录 ： 在特定目录解压缩。
```

## 五.进阶

### 定时任务

crontab的命令构成为 时间+动作，其时间有**分、时、日、月、周**五种，操作符有

* \*\*\*\*\* 取值范围内的所有数字
* **/** 每过多少个数字
* **-** 从X到Z
* \*\*，\*\*散列数字

### 数据流重定向

有一个箭头 **>** 的表示以覆盖的方式重定向，

而有两个箭头 **>>** 的表示以追加的方式重定向。

### 管道

管道是将一个命令的标准输出作为另一个命令的标准输入

## Linux 文本处理

### 🟢 1. **grep** —— 负责“找”

作用：专注于 **过滤文本**，匹配符合条件的行。

常用用法

```
grep "error" logfile        # 找出包含 error 的行
grep -v "success" logfile   # 反向匹配，不包含 success
grep -i "error" logfile     # 忽略大小写
grep -r "TODO" src/         # 递归查找目录
grep -E "WARN|ERROR" log    # 使用正则匹配
```

适用场景

- 日志关键字查询
- 从大文件里快速筛选需要的行
- 配合 `tail -f` 实时过滤日志

------

### 🟡 2. **sed** —— 负责“改”

作用：**流编辑器**，主要用来 **替换、删除、插入、修改** 文本。

常用用法

```
sed 's/foo/bar/g' file          # 将 foo 替换成 bar
sed -i 's/foo/bar/g' file       # 直接修改文件（in-place）
sed -n '10,20p' file            # 打印第 10 到 20 行
sed '/^#/d' file                # 删除以 # 开头的行
sed '1,3d' file                 # 删除第 1~3 行
sed '5i hello' file             # 在第 5 行前插入 "hello"
```

适用场景

- 批量替换配置文件中的参数
- 删除或插入特定行
- 快速格式化文本

------

### 🔵 3. **awk** —— 负责“算”

作用：**模式扫描 + 处理语言**，更强大，能做复杂的 **统计、格式化、计算**。

常用用法

```
awk '{print $1,$3}' file          # 打印第 1 和第 3 列
awk -F: '{print $1}' /etc/passwd  # 以 ":" 为分隔符，打印第 1 列
awk '{sum+=$2} END{print sum}' f  # 求第 2 列的和
awk '$3 > 100' file               # 打印第 3 列大于 100 的行
df -h | awk '{print $1,$5}'       # 过滤磁盘使用率
```

适用场景

- 日志分析（统计某 IP 出现次数）
- 按列处理数据（CSV、监控输出等）
- 简单数据报表（求和、平均值）

------

### 🔑 总结类比

| 工具     | 主要用途      | 核心能力                     | 常用场景             |
| -------- | ------------- | ---------------------------- | -------------------- |
| **grep** | 查找/过滤行   | 正则匹配整行                 | 日志过滤、关键字搜索 |
| **sed**  | 修改/编辑文本 | 行级别替换、删除、插入       | 配置文件批量修改     |
| **awk**  | 处理/分析数据 | 列操作、条件判断、计算、统计 | 日志统计、报表生成   |

可以这么记：
 👉 **grep** 用来“找”，**sed** 用来“改”，**awk** 用来“算”。