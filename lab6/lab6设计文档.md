
## 正则表达式的解释
1、移动手机号码/^1\d{10}$/。以1开头，1后面是十位整数；

2、邮箱/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.([A-Za-z]{2,4})$/。“@”之前的部分由字母、数字、下划线或横杠组成；“@”之后由字母、数字、下滑线、横杠组成；结尾必须是点号连接2至4位的大小写字母；

3、/\b([a-zA-Z]+)\1\b/ig;匹配两个重复的英文单词，不区分大小写且进行全局匹配


## 继承的不同方式

1、构造函数：在子类型构造函数的内部调用超类型构造函数。

2、原型链：将子类的原型设为父类的实例

3、原型式：基于已有对象创建新对象，本质上是做了已有对象的浅复制

## Map、Set、Array之间的区别和使用。

一、Map类似于对象，但其键可以是任意类型的。主要包含两类方法：

1、操作方法：

get(key)、
set(key,value)、
delete(key)、has(key)、clear()

2、遍历方法：

keys()、values()、entries()、forEach(func)

二、set类似于数组，但成员值都是唯一的，主要包含两类方法：

1、操作方法：

add(value)、delete(value)、has(value)、clear()

2、遍历方法：

keys()：返回键名遍历器
values()：返回值的遍历器
entries()：返回键值对的遍历器
forEach(func)：使用回调函数遍历每个成员


三、Array 使用单独的变量名来存储一系列的值，可以push、pop、
shift、unshift、splice……


## 作业提交

###  作业提交网址

//github.com/(Your ID)/SOFT130002_lab

e.g. //github.com/linchenlinchen/SOFT130002_lab 

设计文档请在同样的ddl前在elearning上提交。

## 截止时间

DDL：2020年5月7日星期日 23：59