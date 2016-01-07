var express = require('express');
var exphbs  = require('express-handlebars');
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

app.use('/content', express.static('views'));
app.use('/handlebars', express.static('node_modules/handlebars/lib'));

app.engine('handlebars', exphbs({defaultLayout:  __dirname + 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('enemies');
});

var router = express.Router();
router.get('/', function(req, res) {
	res.end("Test");
});

require("./api-trinkets")(router, con);
require("./api-enemies")(router, con);

app.use(subdomain('api', router));

app.use(vhost('images.vermintideutility.com', express.static('/var/www/images/', {fallthrough: false})));

var server = app.listen(80, function(){});
