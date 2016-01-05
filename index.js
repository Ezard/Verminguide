var express = require('express');
var subdomain = require('express-subdomain');
var mysql = require('mysql');
var vhost = require('vhost');

var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Superezard2',
	database : 'vermintideutility'
});

setTimeout(function() {
	con.connect();
}, 1000);

var app = express();

var router = express.Router();
router.get('/', function(req, res) {
	res.end("Test");
});

require("./api-trinkets")(router, con);

app.use(subdomain('api', router));

app.use(vhost('images.vermintideutility.com', express.static('/var/www/images/', {fallthrough: false})));
app.get('/', function(req, res) {
	res.end("Test");
});

var server = app.listen(80, function(){});
