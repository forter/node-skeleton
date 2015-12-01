var express  = require('express');
var app      = express(); 								
var port  	 = 3000; 				

app.use(express.static(__dirname + '/client')); 		// statics
require('./server/routes.js')(app);						// routes

app.listen(port);										// let the games begin!
console.log("Web server listening on port " + port);
