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
  - db.user.remove({"name":"jspang"}) 根据条件删除
  - db.user.drop() 删除全部
  - 移动到文件目录下之后db.dropDatabase()
  - vscode中 load('./testUpdate.js')相当于运行运行

- update常用操作

  - db.user.update({"name":"jspang"},{"name":"jspang","age":"18"})mongodb可以根据条件直接修改数据结构
  - db.testUpdate.update({name:'lyc'},{$set:{sex:0,age:999}}),可以只修改其中特定选项
  - db.testUpdate.update({name:'lyc'},{$unset:{sex:''}})取消属性
  - db.testUpdate.update({name:'lyc'},{$inc:{age:-99}})在当前情况下计算数学
  - db.testUpdate.update({},{$set:{interest:[]}},{multi:true}) 空对象代表查找全部，mylti是否继续向下查找，
  - db.testUpdate.update({name:'xiaowang'},{$set:{sex:0,age:999,interest:[]}},{upsert:true})，找不到的情况自动添加
  - db.testUpdate.update({name:'xiaowang}',{$push:{interest:'draw'}}) //在数组interest中插入draw
  - db.testUpdate.update({name:'xiaowang', interest:{$ne:'Game'}},{$push:{interest:'playGame'}}) ,$ne先判断是否有该元素，没有则进入push
  - db.testUpdate.update({name:'xiaowang'},{$addToSet:{interest:'readBook'}})  addToSet功能一致
  - $each拆分数组
  - $pop 为1时从末端进行删除，-1时从开始位置进行删除
  - db.testUpdate.update({name:'xiaowang'},{$set:{"interest.2":"code"}})