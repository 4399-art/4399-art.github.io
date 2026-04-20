# sql

[官方文档](https://dev.mysql.com/doc/refman/8.0/en/optimization.html)

`SQL关键字总是大写，以示突出，表名和列名均使用小写。`

## 一. 数据表基本操作

### 1.1 数据表的创建 create

#### 1.1.1 语法形式

1. create database study;（创建）

   **drop database study;(删除)**
2. use study;

   **drop table tb\_emp1;**

```
create table tb_emp1
(
id	int(11),
name	varchar(25),
deptid	int(11),
salary	float    
);

show tables;
```

#### 1 .1.2主键约束

1. 单字段主键

   id int(11) primary key

   ```
   create table tb_emp2
   (
   id	int(11)	primary key,
   name	varchar(25),
   deptid	int(11),
   salary	float    
   );
   ```
2. 多字段主键

   primary key(name,deptid)

```
create table tb_emp4
(
id	int(11)	,
name	varchar(25),
deptid	int(11),
salary	float,
primary key(name,deptid)
);
```

#### 1.1.3外键约束

foreign key

* 主表

```
create table tb_dept1
(
id	int(11)	primary key,
name	varchar(25),
location	varchar(50)
);
```

* 从表

  ```
  create table tb_emp5
  (
  id	int(11)	primary key,
  name	varchar(25),
  deptid	int(11),
  salary	float,
  constraint 外键名 foreign key(deptid) references tb_dept1(id)
  );
  ```

#### 1.1.4 非空约束

name varchar(25) not null,

#### 1.1.5 唯一性约束

表中：primary key (仅一个)= unique（可多个） + not null

一个表只能有一个主键，但是可以有好多个UNIQUE，而且UNIQUE可以为NULL值

name varchar(25) UNIQUE,

```
create table tb_dept3
(
id	int(11)	primary key,
name	varchar(25),
location	varchar(50),
constraint sth  UNIQUE(name)   
);
```

#### 1.1.6 默认约束

字段名 数据类型 default 默认值

id int(11) default 111,

#### 1.1.7 自动增长约束

id int(11) auto\_increment

* 自动增长必须为索引（主键或unique）
* 只能存在一个字段为自动增长。
* 默认为1开始自动增长。可以通过表属性 auto\_increment = x进行设置，或 alter table tbl auto\_increment = x;

**ENGINE 设置存储引擎，CHARSET 设置编码**

### 1.2查看数据表结构 desc

#### 1.2.1 desc/describe

desc 表名；

```
SHOW CREATE TABLE 表名    （信息更详细）
```

### 1.3 修改数据表 alter

alter table <表名>

1.3.1 修改表名

必选参数<>

可选参数[]

alter table <表名> rename [to] <新表名>;

```
alter table study rename [to] student;
```

1.3.2修改字段的数据类型

[modify](dic://modify) 强调起限定作用的变化或变更。指细小的变化，常含“缓和、降调”的意味。

alter table <表名> modief <字段名> <数据类型>;

1.3.3修改字段名

[change](dic://change) 指任何变化，完全改变，强调与原先的情况有明显的不同。

alter table <表名> change <旧字段名> <新字段名> <新数据类型>;

1.3.4添加字段

alter table <表名> add <新字段名> <数据类型> [约束条件];

约束条件：**FIRST** (设定位第一列)， **AFTER** 字段名（设定位于某个字段之后）。

1.3.5删除字段

alter table <表名> drop <字段名>；

1.3.6修改字段排列位置

alter table <表名> modief <要移动的字段名> <数据类型> 约束条件;

1.3.7更改表的存储引擎

alter table <表名> change=更改后的引擎名；

1.3.8删除表的外键约束

alter table <表名> drop foreign key 外键约束名；

### 1.4删除数据表

1.4.1 删除没有被关联的表

drop table [if exists] 表1，表2....表n；

if exists：用于判断表是否存在

删除不存在的表会报错，加上if exists只会警告

1.4.2 删除被其他表关联的主表

要先删除从表才能删除主表

仅删除主表，需要取消外键约束：alter table 从表名 drop foreign key 外键名；

## 二. 数据类型 和 运算符

## 三. 函数

## 四. 查询数据 select

[连接查询](https://www.liaoxuefeng.com/wiki/1177760294764384/1179610888796448)

```
create table fruits
(
f_id	char(10)	NOT NULL	primary key,
s_id	int			NOT NULL,
f_name	char(255)	NOT NULL,
f_price	decimal(8,2)  NOT NULL
);
```

```
insert into fruits(f_id,s_id,f_name,f_price)
values('a1',101,'apple',5.2),
	('b1',101,'orange',0.2),
	('bs1',102,'banana',11.2),
	('bs2',105,'zzzz',5.2),
	('a5',107,'xxxx',3.6);
```

### 条件查询

```
SELECT * FROM <表名> WHERE <条件表达式>
```

`NOT`优先级最高，其次是`AND`，最后是`OR`。

### 排序

`ORDER BY`

默认的排序规则是`ASC`：“升序”，即从小到大。`ASC`可以省略，加上`DESC`表示“倒序”

### 分组

`GROUP BY`

### 分页

分页实际上就是从结果集中“截取”出第M~N条记录。这个查询可以通过`LIMIT <N-M> OFFSET <M>`子句实现。

然后根据当前页的索引`pageIndex`（从1开始）

* `LIMIT`总是设定为`pageSize`；
* `OFFSET`计算公式为`pageSize * (pageIndex - 1)`。

在MySQL中，`LIMIT 15 OFFSET 30`还可以简写成`LIMIT 30, 15`。

### 聚合查询

| SUM | 计算某一列的合计值，该列必须为数值类型 |
| --- | --- |
| AVG | 计算某一列的平均值，该列必须为数值类型 |
| MAX | 计算某一列的最大值 |
| MIN | 计算某一列的最小值 |

`MAX()`和`MIN()`函数并不限于数值类型。如果是字符类型，`MAX()`和`MIN()`会返回排序最后和排序最前的字符。

### 连接查询

```
SELECT ... FROM tableA ??? JOIN tableB ON tableA.column1 = tableB.column2;
```

我们把tableA看作左表，把tableB看成右表，那么INNER JOIN是选出两张表都存在的记录：



![inner-join](https://gitee.com/feeling-to/img/raw/master/typora/inner-join.jpg)

LEFT OUTER JOIN是选出左表存在的记录：

![left-outer-join](https://gitee.com/feeling-to/img/raw/master/typora/left-outer-join.jpg)

RIGHT OUTER JOIN是选出右表存在的记录：

![right-outer-join](https://gitee.com/feeling-to/img/raw/master/typora/right-outer-join.jpg)

FULL OUTER JOIN则是选出左右表都存在的记录：

![full-outer-join](https://gitee.com/feeling-to/img/raw/master/typora/full-outer-join.jpg)

### 别名

设置别名的语法是`FROM <表名1> <别名1>, <表名2> <别名2>`。

## 五. 插入、更新与删除数据

### INSERT

```
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
```

### UPDATE

```
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
```

### DELETE

```
DELETE FROM <表名> WHERE ...;
```

如果`WHERE`条件没有匹配到任何记录，`DELETE`语句不会报错，也不会有任何记录被删除。

注：在执行`DELETE`语句时要非常小心，最好先用`SELECT`语句来测试`WHERE`条件是否筛选出了期望的记录集，然后再用`DELETE`删除。

## 实用SQL语句

### 写入查询结果集

```
INSERT INTO statistics (class_id, average) SELECT class_id, AVG(score) FROM students GROUP BY class_id;
```

### 快照

```
-- 对class_id=1的记录进行快照，并存储为新表students_of_class1:
CREATE TABLE students_of_class1 SELECT * FROM students WHERE class_id=1;
```

## 六. 索引

* 索引的优点是提高了查询效率
* 缺点是写数据时要动态维护索引，还占用额外的存储空间

> 对于主键，关系数据库会自动对其创建主键索引。使用主键索引的效率是最高的，因为主键会保证绝对唯一。

## 七. 存储过程和函数

## 八. 视图

## 九. 触发器

## 十. 权限与安全管理

## 十一. 数据备份与恢复

## 十二. 日志

## 十三. 性能优化

## 十四 . replication

## 十五 . 存储引擎

## 十六. JDBK

```
import java.sql.*;
public class jdbkMysql {
    public static void main(String[] args)  throws SQLException, ClassNotFoundException {
        //要连接的数据库的url  
        //在使用数据库连接池的情况下，最好设置如下两个参数：//autoReconnect=true&failOverReadOnly=false
        
      serverTimezone=GMT%2B8（时区），是防止idea和sqlyog有时差用的，统一时间。
      useSSL设置为false（加密）
      useUnicode=true&characterEncoding=utf8   是否使用Unicode字符集，如果参数characterEncoding有值，本参数值必须设置为true
               
 
          String url="jdbc:mysql://localhost:3306/study?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2B8";
                //连接数据库时使用的用户名
                String username="root";
                //连接的数据库时使用的密码
                String password="25963Ar";

                //使用jdbc的步骤
                // 1. 加载驱动。在加载前，先手动将jar包导入项目：建个lib文件夹，然后
                // 将jar包加进来，再add to library。同时，先在sqlyog里面随便建一个数据库，等会用于提起其信息

                try {

                    Class.forName("com.mysql.cj.jdbc.Driver");//现在使用这种方式来加载驱动，Class.forName反射里常用到

                } catch (ClassNotFoundException e) {

                    e.printStackTrace();

                }



                // 2. 获取与数据库的连接。Connection代表数据库
                Connection conn= DriverManager.getConnection(url,username,password);


                // 3. 获取用于向数据库发送数据的Statement对象（果然面向对象编程）。Statement对象可以执行sql的一些操作，比如更新，查询，插入等。
                Statement st=conn.createStatement();
                String sql="SELECT * from fruits";//sql查询语句

                // 4. 向数据库发sql，并获取代表结果集的resultset
                ResultSet rs=st.executeQuery(sql);

                // 5. 取出结果集的数据
                    while(rs.next()){
                        System.out.println("f_id="+rs.getObject("f_id"));
                        System.out.println("s_id="+rs.getObject("s_id"));
                        System.out.println("f_price="+rs.getObject("f_price"));
                        System.out.println("=============================");
                }

                // 6. 关闭连接，释放资源
                rs.close();
                st.close();
                conn.close();

            }
        }
```

### JDBC实现简单增删改查

### sql注入

## 事务

* Automicity:原子性,事务是最小的执行单位，不允许分割。
* Consistency:一致性，数据库从一个正确的状态变化到另一个正确的状态；
* Isolation:隔离性，并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的
* Durability:持久性，一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。

> 开启标志

* 任何一条DML语句(insert、update、delete)执行

> 结束标志(提交或回滚)

* 提交：成功的结束，将所有的DML语句操作历史记录和底层硬盘数据来一次同步
* 回滚：失败的结束，将所有DML语句操作历史记录全部清空

*显式事务*

```
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

主动让事务失败，这时，可以用`ROLLBACK`回滚事务

```
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
ROLLBACK;
```

### 隔离级别

SQL标准定义了4种隔离级别，分别对应可能出现的数据不一致的情况：

| Isolation Level | 脏读（Dirty Read） | 不可重复读（Non Repeatable Read） | 幻读（Phantom Read） |
| --- | --- | --- | --- |
| Read Uncommitted | Yes | Yes | Yes |
| Read Committed | - | Yes | Yes |
| Repeatable Read | - | - | Yes |
| Serializable | - | - | - |

## IDEA连接MySQL8.0.20

## 主从复制

MySQL创建用户命令：CREATE USER 'username'@'host' IDENTIFIED BY 'password';
username：指定创建的用户名
host：指定用户登录的主机ip，% 表示任意主机都可远程登录，localhost 表示本地才能登录
password：指定该用户的登录密码

```
CREATE USER 'Ar'@'192.168.20.130' IDENTIFIED BY '123456';
GRANT REPLICATION SLAVE ON *.* TO 'Ar'@'192.168.20.130';

备机：
CHANGE REPLICATION SOURCE TO SOURCE_HOST='192.168.20.1',SOURCE_PORT=3306,SOURCE_USER='Ar',SOURCE_PASSWORD='123456',SOURCE_LOG_FILE='DESKTOP-298L29I-bin.000167',SOURCE_LOG_POS=554;
```

## 日积月累

### SQL中Where与Having的区别

* “Where” 是一个约束声明，是在查询**结果集返回之前**约束来自数据库的数据，且Where中不能使用聚合函数。
* “Having”是一个过滤声明，是在查询**结果集返回以后**对查询结果进行的过滤操作，在Having中可以使用聚合函数。

### 去重

* DISTINCT
* group by