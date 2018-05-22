var myModify = {
  findAndModify: 'testUpdate',
  query:{name:'lyc'},
  update:{$set:{sextime:'10000s'}},
  new:true
}
var resMsg = db.runCommand(myModify)
printjson(resMsg)