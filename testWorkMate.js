// db.workmate.find({age:{$lt:30,$gte:20}},{name:true,"skill.skillOne":true,age:1}) //true代表该字段返回，可以用1代替，0代替false, $lt $lte $gt $gte $ne less than equal notequal
db.workmate.find({age:{$in:[25,33,29]}},{name:1,age:1}) // $in一个值的多条件查询返回age===25,33,29的
db.workmate.find({age:{$nin:[25,33,29]}},{name:1,age:1})  // $nin 不包括
db.workmate.find(
  {$or:[
    {age:{$gte:30}},
    {"skill.skillOne":"PhotoShop"}
  ]},{name:1,age:1,"skill.skillOne":1}
)  // $or选择或者条件，age或者技能1位photoshop

db.workmate.find({interest:'画画'},{name:1,age:1,interest:1,_id:0}) //匹配兴趣数组中单个特性的人
db.workmate.find({interest:{$all:['画画','看电影']}},{name:1,age:1,interest:1,_id:0}) //匹配兴趣数组中单个特性的人
db.workmate.find({},{name:1,age:1,_id:0}).limit(3).skip(0).sort({age:1}) //limit限制返回个数，skip限制从第几个开始，sort排序方式
db.workmate.find({$where:"this.age>30"},{name:1,age:1,_id:0})