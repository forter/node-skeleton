const express   = require('express');
const app       = express();
const port      = 3000;

app.use(express.static(`${__dirname}/client`)); 		// statics
require(`./server/routes.js`)(app);						// routes

app.listen(port);										// let the games begin!
console.log(`Web server listening on port ${port}`);
