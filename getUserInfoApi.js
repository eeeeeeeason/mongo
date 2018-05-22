import Mock from 'mockjs'
function createRandom (min, max) {
  return min + Math.ceil((max - min)*Math.random())
};
var testTemp = []
var name = Mock.Random.last() // 随机名称
var age = createRandom(1,100)
var mobile = 10000000000 + createRandom(1,9999999999)
var gender = Math.round(createRandom(0,1))
var address = Mock.Random.county(true)
return {name, age, mobile, gender, address}