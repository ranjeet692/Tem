module.exports = function(){

	global.app.post('/login', function(req, res) {
		var userName = req.body.username;
		var password = req.body.password;
		var admn = false;
		if(req.body.admin){
		    admin = true;
		}
	  
	  	global.userService.login(userName, password, admin).then(function(result){
            res.status(200).send(result);
        },function(err){
            res.status(401).send(err);
        });
	});

	global.app.get('/user/list', function(req, res) {

		global.userService.getAllUserList().then(function(result){
			res.status(200).send(result);
		}, function(err){
			res.status(500).send(err);
		});

	});

	global.app.put('/user/update', function(req, res) {
		var data = {};
		data = req.body;
	    
	    console.log(JSON.stringify(req.body));

	    global.userService.saveUserData(data).then(function(result){
    		res.status(200).send(result);
	    }, function(err){
			res.status(500).send(err);
	    });

	});

	global.app.post('/user/delete', function(req, res){
		var id = req.body.id;
		global.userService.deleteUserData(id).then(function(result){
    		res.status(200).send(result);
	    }, function(err){
			res.status(500).send(err);
	    });
	});

	global.app.post('/password/check', function(req, res) {
	  res.status(200).send({ message: "" });
	});

	global.app.post('/password/change', function(req, res) {
	  res.status(200).send({ message: "" });
	});
};