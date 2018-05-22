#权限分配
 - db.createUser({user,pwd,customData,roles}) //创建用户
 - db.system.users.remove({user:'zxcvxcv'}) //删除用户
 - db.auth("用户名","密码") // 返回1建权成功，建权的目的是代替原本的mongo最高权限登陆
 - 建权完毕需要mongo --auth 启动， mongo -u eason -p 123456 127.0.0.1:27017/admin
#备份还原
 mongodump //备份
 mongorestore --host 127.0.0.1 --port 27017 d:/backup/
