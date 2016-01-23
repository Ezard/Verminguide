var express = require('express');
var exphbs  = require('express-handlebars');
var subdomain = require('express-subdomain');
var mysql = require('mysql');
var vhost = require('vhost');
var compression = require('compression');
var slash = require("express-slash");

var con = mysql.createConnection(require('./config'));

setTimeout(function() {
	con.connect();
}, 1000);

var app = express();

app.enable('strict routing');

app.use(compression({}));

app.use('/content', express.static('views'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/scripts', express.static('scripts'));
app.use('/handlebars', express.static('node_modules/handlebars/dist'));

app.engine('handlebars', exphbs({defaultLayout:  __dirname + '/views/layouts/main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

var router = express.Router();
var api = require("./api/api")(con);
require("./api/router")(router, api);

app.use(subdomain('api', router));

app.get('/*', function(req, res, next) {
	if (req.headers.host.match(/^www\./)) {
		res.writeHead(301, {'Location': 'http://vermintideutility.com'});
		res.end();
	} else {
		return next();
	}
});

app.get('/', function(req, res) {
	api.getTrinkets(function(trinkets) {
		//res.render('home', function(err, html) {
		//	res.end(html.replace("[[title]]", "Test"));
		//});
		res.render('home');
	});
});
app.get('/heroes/', function(req, res) {
	api.getHeroes(function(heroes) {
		res.render('heroes', {heroes: heroes});
	});
});
app.get('/enemies/', function(req, res) {
	api.getEnemies(function(enemies) {
		res.render('enemies', {enemies: enemies});
	});
});
app.get("/enemies/:name([a-z-]+)", function(req, res) {
	api.getEnemy(req.params.name.replace('-', ' '), function(enemy) {
		res.render('enemy', {enemy: enemy});
	});
});
app.get('/trinkets/', function(req, res) {
	api.getTrinkets(function(trinkets) {
		res.render('trinkets', {trinkets: trinkets});
	});
});

app.use(vhost('static.vermintideutility.com', express.static('/var/www/images/', {fallthrough: false})));
app.use(slash());

var server = app.listen(80, function(){});
