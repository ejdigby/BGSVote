# BGS Vote
Voting App for inter-house singing competition. Made by [Edward Digby](http://twitter.com/ejdigby) and [James Brooks](http://twitter.com/jamesbrks).


The Four Houses At Our School Are:
 - Rorschach
 - Behn
 - Meitner
 - Tinbergen


### Setup
To be able to run this app you will need to point the messaging request URL to: `yourdomainname.com:83/sms`

###Running
 	`sudo nodejs server.js`

 This will start the express.io server on port 83.

### Dependencies
This App uses:
 - Express.io
 - Socket.io
 - Express-handlebars
 - Twilio

###Structure
Directory Structure:
```	
	.
	├── server.js
	├── package.js
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
