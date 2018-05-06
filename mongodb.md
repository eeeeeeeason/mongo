# mongoDB



- mongod 运行数据库

- mongo 连接数据库，mongoshell命令

  - print()打印

- mongodb命令

  - show dbs 显示已有数据库admin local
  - use admin 使用数据库，没有的话会创建
  - show collections  显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）。
  - db 在哪个库
  - db.version() 数据库版本

- 存储结构

  ```
  关系型数据库：数据库，数据表，数据行
  非关系型数据库：数据库，集合，文件
  |
  |
  |
  |
  |
  ```

  ​

- 数据库操作命令

  - db.user.insert({"name":"jspang"}) 插入

  - db.user.insert([{"name":"jspang"},{"name":"jspang1"},{"name":"jspang2"}]) 批量插入，一次插入不要超过48M

  - db.user.find()

  - db.user.findOne()

  - db.user.update({"name":"jspang"},{"name":"jspang","age":"18"})mongodb可以根据条件直接修改数据结构

  - db.testUpdate.update({name:'lyc'},{$set:{sex:0,age:999}}),可以只修改其中特定选项

  - db.testUpdate.update({name:'lyc'},{$unset:{sex:''}})取消属性

  - db.testUpdate.update({name:'lyc'},{$inc:{age:-99}})计算数学

  - db.user.remove({"name":"jspang"}) 根据条件删除

  - db.user.drop() 删除全部

  - 移动到文件目录下之后db.dropDatabase()

  - vscode中 load('./testUpdate.js')相当于运行运行

    ​

    ​