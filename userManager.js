db.createUser({
  user: "eason", //创建的用户
  pwd: "123456", // 会自动加密
  customData:{
    name:"eason",
    email:"492760446@qq.com",
    age: 18
  },
  roles:[{
    role:"readWrite",
    db:"company"
  },'read']
})