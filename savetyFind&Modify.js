// db.testUpdate.update({sexx:1},{$set:{money:100000}},false,true)
// var resultMsg = db.runCommand({getLastError:1})

// if (resultMsg.updatedExisting) {

// } else {
  
// }
// printjson(resultMsg)
var myModify = {
  findAndModify: "testUpdate",
  query:{name:'eason'},
  update:{$set:{age:18}},
  new:true  //可以观察到修改后的值
  // query：需要查询的条件/文档
  // sort:    进行排序
  // remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
  // new:[boolean]返回更新前的文档还是更新后的文档。
  // fields：需要返回的字段
  // upsert：没有这个值是否增加
}
var resultMsg = db.runCommand(myModify);
printjson(resultMsg)