var express  = require('express');
var app      = express(); 								
var port  	 = 3000; 				

app.use(express.static(__dirname + '/public')); 		// statics
require('./app/routes.js')(app);						// routes

app.listen(port);										// let the game begin!
console.log("Web server listening on port " + port);
