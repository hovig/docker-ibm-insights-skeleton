var cors = require( 'cors' );
var Database = require( 'better-sqlite3' );
var express = require( 'express' );
var jsonfile = require( 'jsonfile' );
var parser = require( 'body-parser' );
var request = require( 'sync-request' );



// Application
var app = express();

// IP tracking
app.enable( 'trust proxy' );

// Cross-domain
app.use( cors() );

// Middleware
app.use( parser.json( {limit: '50mb'} ) );
app.use( parser.urlencoded( {
	limit: '50mb',
	extended: false,
	parameterLimit: 50000
} ) );



// Static for main files
app.get('/', (req, res) => {
	res.send('api @ port 3000');
});


// Listen
var server = app.listen( 3000, function() {
	// Debug
	console.log("Server started at localhost:3000");
} );
