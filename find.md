  - find(query, fields, limit, skip, sort, batchSize, options)
    - query 查询条件
    - fields显示条件
    - limit 返回结果控制。如分页
    - skip 跳过，和limit结合
    - sort 排序方式
  - findAndModify
    ```
    var myModify = {
      findAndModify: 'testUpdate', // 操作数据库
      query:{name:'lyc'}, // 选择条件
      update:{$set:{sextime:'10000s'}},
      new:true //返回新数据
    }
    var resMsg = db.runCommand(myModify) // 执行
    ```
  - db.workmate.find({age:{$lt:30,$gte:20}},{name:true,"skill.skillOne":true,age:1}) //true代表该字段返回，可以用1代替，0代替false, $lt $lte $gt $gte $ne less than equal notequal
  - $in 一个key多个value条件查询
  - $or 或者条件
  ```
  db.workmate.find(
  {$or:[
    {age:{$gte:30}},
    {"skill.skillOne":"PhotoShop"}
  ]},{name:1,age:1,"skill.skillOne":1}
  )  // $or选择或者条件，age或者技能1位photoshop
  ```    
  - 要匹配数组interest中单个属性只要填一个字段db.workmate.find({interest:'画画'},{name:1,age:1,interest:1,_id:0})
  - 但是要匹配数组中多个属性$all 
  ```
  db.workmate.find({interest:{$all:['画画','看电影']}},{name:1,age:1,interest:1,_id:0}) //匹配兴趣数组中单个特性的人
  ```
  - 匹配其中一项$in
  ```
  db.workmate.find({interest:{$in:['画画','看电影']}},{name:1,age:1,interest:1,_id:0}) //匹配兴趣数组中单个特性的人
  ``` 
  - 兴趣个数为5$size
  ```
  db.workmate.find({interest:{$size:5}},{name:1,age:1,interest:1,_id:0}) //匹配兴趣数组中单个特性的人
  ```
  - 显示返回值第一项$slice
  ```
  db.workmate.find({interest:{$all:['画画','看电影']}},{name:1,age:1,interest:{$slice:1},_id:0}) //匹配兴趣数组中单个特性的人
  ```
  - $and 合并条件
  - $not 
  - db.randomInfo.ensureIndex({username:1}) // 建立索引，索引能将搜索单位放入缓存区加速下一次搜索结果的展示
  - db.randomInfo.getIndexes() // 获取索引
  - var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1}); // 复合索引查询，注意数字类型更加快速，hint可以决定查询的首要条件
  - db.randomInfo.dropIndex('randNum0_1');//删除索引的唯一ID，记得是name而不是索引设置的key