db.testUpdate.update({sex:0},{$set:{money:1000}},false,true)
var result = db.runCommand({getLastError:1})
printjson(result)