// Load Express
var express = require('express.io');
var exphbs = require('express-handlebars');
var io = require('socket.io');
var config = require('./config.json');

var client = require('twilio')(config.accountSid, config.authToken);

var Rorschach = 0;
var Behn = 0;
var Meitner = 0;
var Tinbergen = 0;

var blacklistednumbers = [] ;

var app = express();

app.http().io();
app.use(express.bodyParser());

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        Rorschach: function () { return Rorschach; },
        Behn: function () { return Behn; },
        Meitner: function () { return Meitner; },
        Tinbergen: function () { return Tinbergen; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Broadcast the new visitor event on ready route.
app.io.route('ready', function(req) {
    req.io.broadcast('new visitor')
    console.log("NEW USER")
})
 

var addonerorschach = function(){
    app.io.broadcast('addonerorschach');
}
var addonebehn = function(){
    app.io.broadcast('addonebehn');
}
var addonemeitner = function(){
    app.io.broadcast('addonemeitner');
}
var addonetinbergen = function(){
    app.io.broadcast('addonetinbergen');
}

app.get('/', function (req, res, next) {
    res.render('index', {
        showTitle: true,
    });
});

app.listen(83);
app.use(express.static('views'));
   
var determinehouse = function(body){
    var house;
    if (body == "R") {
	     house = "Rorschach";
	     Rorschach = Rorschach + 1;
       addonerorschach()
    } else if (body == "B") {
	     house = "Behn";
	     Behn ++;
	     addonebehn()
    } else if (body == "M") {
	     house = "Meitner";
	     Meitner ++;
      addonemeitner()
    } else if (body == "T") {
	     house = "Tinbergen";
	     Tinbergen ++;
       addonetinbergen()
    } else {
	     house = "ERROR";
    }
    return house;
};

var checkblacklist = function(number){
    // var blocknumbersfile = require('blockednumbers.json');
  var blacklisted = false;
  for (i = 0; i <= blacklistednumbers.length; i++){
      if (number == blacklistednumbers[i]){
          blacklisted = true;
    		  return blacklisted;
      } else{
        blacklisted = false;
      }
     
	};
  return blacklisted;
};

var addblacklist = function(number){
    blacklistednumbers.push(number);
    return
};

var sendText = function(number, house){
  var mbody;
  if (house == "ERROR"){
	   mbody = "I'm sorry that isn't a valid house, please try again. To vote please enter the name of the house you would like to vote for.";
	} else if (house == "BLACKLISTED"){
	   mbody = "I'm sorry you have already voted!";
  } else{
		 mbody = ("Thank You For Voting For " + house);
	} 
  
  var client = require('twilio')(accountSid, authToken);
  client.messages.create({
	to: number,
	from:'+442033897054',
	body: mbody
	}, function(error, message) {
	        if (error) {
		            console.log(error.message);
		        }
	    });
};

// handle input
app.post('/sms', function (req, res) {
    
  var body = req.body.Body;
  var from_number = req.body.From;

  var blacklisted = checkblacklist(from_number);
  if (blacklisted == true){
     house = "BLACKLISTED";
     sendText(from_number, house);
  }
  else {
      var house = determinehouse(body.toUpperCase());
      if (house == "ERROR") {
	       sendText(from_number, house);
	       return;
	    } else {
	       addblacklist(from_number);
	       sendText(from_number, house);
      }
  }
return;
});
