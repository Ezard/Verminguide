var express = require('express');
var exphbs = require('express-handlebars');
var subdomain = require('express-subdomain');
var mysql = require('mysql');
var vhost = require('vhost');
var compression = require('compression');
var slash = require("./slash");

var con = mysql.createConnection(require('./config'));

setTimeout(function () {
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
app.use('/static', express.static('static'));

app.engine('handlebars', exphbs({
	defaultLayout: __dirname + '/views/layouts/main',
	helpers: {
		booleanToYesNo: function (bool) {
			return bool ? "yes" : "no";
		},
		smallerFont: function (str) {
			if (str.length >= 15) {
				return 'class="smaller_text" ';
			} else {
				return "";
			}//1em
		},
		json: function (obj) {
			return JSON.stringify(obj);
		}
	}
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

var router = express.Router({strict: app.get('strict routing')});
var api = require("./api/api")(con);
require("./api/router")(router, api);

router.use(slash());
app.use(subdomain('api', router));

app.get('/*', function (req, res, next) {
	if (req.headers.host.match(/^www\./)) {
		res.writeHead(301, {'Location': 'http://vermintideutility.com'});
		res.end();
	} else {
		return next();
	}
});

app.get('/', function (req, res) {
	res.render('home');
});
app.get('/heroes/', function (req, res) {
	api.getHeroes(function (heroes) {
		res.render('heroes', {
			title: "Heroes",
			description: "Information about the playable characters in Vermintide",
			heroes: heroes
		});
	});
});
app.get('/enemies/', function (req, res) {
	api.getEnemies(function (enemies) {
		res.render('enemies', {
			title: "Enemies",
			description: "Information about the enemies in Vermintide",
			enemies: enemies
		});
	});
});
app.get("/enemies/:name([a-z-]+)", function (req, res, next) {
	api.getEnemy(req.params.name.replace(/-/g, ' '), function (enemy) {
		if (enemy) {
			res.render('enemy', {
				title: enemy.name,
				description: "Information about the " + enemy.name + " enemy in Vermintide",
				enemy: enemy
			});
		} else {
			next();
		}
	});
});
app.get('/trinkets/', function (req, res) {
	api.getTrinkets(function (trinkets) {
		res.render('trinkets', {
			title: "Trinkets",
			description: "Information about the trinkets in Vermintide",
			trinkets: trinkets
		});
	});
});
app.get('/trinkets/:name([a-z-]+)', function (req, res, next) {
	api.getTrinket(req.params.name, function (trinket) {
		if (trinket) {
			res.render('trinket', {
				title: trinket.name,
				description: "Information about the " + trinket.name + " trinket in Vermintide",
				trinket: trinket
			});
		} else {
			next();
		}
	});
});
app.get('/weapons/', function (req, res) {
	api.getWeapons(function (weapons) {
		var weaponSets = [];
		for (var i = 0; i < weapons.length; i++) {
			var found = false;
			for (var j = 0; j < weaponSets.length; j++) {
				if (weaponSets[j].hero == weapons[i].hero) {
					weaponSets[j].weapons.push(weapons[i]);
					found = true;
				}
			}
			if (!found) {
				weaponSets.push({hero: weapons[i].hero, weapons: [weapons[i]]});
			}
		}
		res.render('weapons', {
			title: "Weapons",
			description: "Information about the weapons in Vermintide",
			weapon_sets: weaponSets
		});
	});
});
app.get('/weapons/:name([a-z-]+)', function (req, res, next) {
	api.getWeaponsByClass(req.params.name, function (weapon) {
		if (weapon) {
			res.render('weapon', {
				title: weapon.name,
				description: "Information about the " + weapon.name + " weapon in Vermintide",
				weapon: weapon
			});
		} else {
			next();
		}
	});
});

app.use(vhost('static.verminguide.com', express.static('/var/www/images/', {fallthrough: false})));
app.use(slash());

app.use(function (req, res, next) {
	res.status(404);

	if (req.accepts('html')) {
		res.render('404', {url: req.url});
		return;
	}

	if (req.accepts('json')) {
		res.send({error: 'Not found'});
		return;
	}

	res.type('txt').send('Not found');
});

var server = app.listen(80, function () {
});
