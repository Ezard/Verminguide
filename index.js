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
router.get('/trinkets', function(req, res) {
	con.query("SELECT t.name, tt.description as description, tt.name as type, effect, r.name as rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id", function(err, rows, fields) {
		res.set("Content-type", "application/json");
		var trinkets = [];
		for(var i = 0; i < rows.length; i++) {
			var obj = {};
			if (rows[i].description) {
				if (rows[i].description.indexOf("|val|") != -1) {
					obj.description = rows[i].description.replace(/\|val\|/g, rows[i].effect);
				} else {
					obj.description = rows[i].description;
				}
			}
			obj.name = rows[i].name;
			obj.type = rows[i].type;
			obj.rarity = rows[i].rarity;
			obj.image = rows[i].image;
			trinkets.push(obj);
		}
		res.end(JSON.stringify(trinkets));
	});
});
router.get("/trinkets/:name([a-zA-Z',\-\s%20]+)", function(req, res) {
	con.query("SELECT t.name, tt.description as description, tt.name as type, effect, r.name as rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id WHERE t.name=" + con.escape(req.params.name), function(err, rows, fields) {
		res.set("Content-type", "application/json");
		if (rows.length == 0) {
			res.status(404).end(JSON.stringify({"error":{"message":"Sorry, that resource does not exist"}}));
		} else {
			var trinket = {};
			if (rows[0].description) {
				if (rows[0].description.indexOf("|val|") != -1) {
					trinket.description = rows[0].description.replace(/\|val\|/g, rows[0].effect);
				} else {
					trinket.description = rows[0].description;
				}
			}
			trinket.name = rows[0].name;
			trinket.type = rows[0].type;
			trinket.rarity = rows[0].rarity;
			trinket.image = rows[0].image;
			res.end(JSON.stringify(trinket));
		}
	});
});
app.use(subdomain('api', router));

app.use(vhost('images.vermintideutility.com', express.static('/var/www/images/', {fallthrough: false})));
app.get('/', function(req, res) {
	res.end("Test");
});

var server = app.listen(80, function(){});
