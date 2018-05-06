var userName="jspang"; 
var startTime = new Date().getTime()
var timeStamp=Date.parse(new Date()); 
var jsonDatabase={"loginUnser":userName,"loginTime":timeStamp};
var db = connect('log');
// db.login.insert(jsonDatabase);
var tempArray = [];
for(let i= 0; i<1000; i++) {
  db.user.insert({'number':i})
}
var totalTime = new Date().getTime() - startTime

// db.user.insert(tempArray);
print('[demo]log  print success , time='+ totalTime);