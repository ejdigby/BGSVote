# BGS Vote
Voting application created for our school inter-house competitions. Made by [Edward Digby](http://twitter.com/ejdigby) and [James Brooks](http://twitter.com/jamesbrks).

Our school house system is as follows:
 - Rorschach
 - Behn
 - Meitner
 - Tinbergen


### Setup
Once the app is running, set your Twilio SMS URL to: `yourdomainname.com:83/sms`

### Running
 	node server.js

 This will start the Express server on port 83.

### Dependencies
 - Express
 - Socket.io
 - Express-Handlebars
 - Twilio

### Structure
```	
	├── server.js
	├── package.json
	└── views
	    ├── index.handlebars
	    ├── css
	    |    └── style.css
	    └── js
	    |    └── houses.js	  
	    └── images  
			 └── favicon.png
			 └── logo.png
			 └── meitner.png
			 └── rorschach.png
			 └── tinbergen.png
	         └── behn.png	

2 directories, 3 sub-directories,  11 files
```
