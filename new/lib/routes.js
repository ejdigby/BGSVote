var serverfile = require('../server.js');

module.exports = {

	app.get('/', function(req, res){
		console.log("Request for /");
		res.render('index', {
			showTitle: true,
		});
	});

	app.post('/r', function(req, res){
		console.log("Request for /r");
		serverfile.Rorschach += 1;
		console.log("1 Point For Rorschach")
		console.log(serverfile.Rorschach)
		res.send("Thank you for voting for Rorschach")

	});

	app.post('/b', function(req, res){
		console.log("Request for /b");
		serverfile.Behn += 1;
		console.log("1 Point For Behn")
		console.log(serverfile.Behn)
		res.send("Thank you for voting for Behn")
	});

	app.post('/m', function(req, res){
		console.log("Request for /m");
		serverfile.Meitner += 1;
		console.log("1 Point For Meitner")
		console.log(serverfile.Meitner)
		res.send("Thank you for voting for Meitner")
	});

	app.post('/t', function(req, res){
		console.log("Request for /t");
		serverfile.Tinbergen += 1;
		console.log("1 Point For Tinbergen")
		console.log(serverfile.Tinbergen)
		res.send("Thank you for voting for Tinbergen")
	});

}