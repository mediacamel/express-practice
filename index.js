var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var isLogin = await isLogin(); //true

if(isLogin){
	var isValid = isValidContent(); //true

	if(isValid){
		res.send(content);
	}
}

isLogin(function(err, loginInfo)){
	if(!err)
		isValidContent(function(err, content)){
			if(content !== null)
				res.send(content);
		}
}

user.addEventHandler('loggedIn',function(user){

})

user.isLogin()

user.isLogin = function(){
	return new Promise(function(resolve, reject) {
  // 무엇인가 수행할 수 있고 동기화도 가능. 그리고...

  if (/* 모든 것이 제대로 되었음 */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
}

user.isLogin() // return Promise
.then(function(result){
	return content.isValid() // return Promise
})
.then(function(result2){

})
.catch(function(err){

})
