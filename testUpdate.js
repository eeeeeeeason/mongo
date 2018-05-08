var user1 = {name:'eason',age:'18',sex:1};
var user2 = {name:'lyc',age:'23',sex:0};
var user2Change = {name:'lyc',age:'99',sex:1};
var db = connect('testUpdate');
// db.testUpdate.insert([user1,user2]);
// 方法1
// db.testUpdate.update({name:'lyc'},user2Change)
// 方法2
// db.testUpdate.update({name:'lyc'},{$set:{sex:0,age:999}})
var InterestsList = ['sing','dance','rap'];
// 批量增加数组属性
// db.testUpdate.update({name:'xiaowang'},{$addToSet:{interest:{$each:InterestsList}}});
db.testUpdate.update({name:'xiaowang'},{$set:{"interest.2":"running"}})

print('success');