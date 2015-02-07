var express = require('express');

var exphbs = require('express-handlebars');
var app = express()
var server = require('http').createServer(app);
var bodyParser = require('body-parser')
var io = require('socket.io').listen(server);
var port = 83

module.exports = {
var Rorschach = 0;
var Behn = 0;
var Meitner = 0;
var Tinbergen = 0;
}

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use('/components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser()); // Automatically parses form data

app.use(express.static('views'));

server.listen(port);
console.log("Listening at port %s", port)

var routes = require('./lib/routes.js')(app, hbs);