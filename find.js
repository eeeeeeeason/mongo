var mongodb = connect('company')
var res = mongodb.workmate.find()
res.forEach(item => {
  printjson(item)
});