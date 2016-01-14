module.exports = function (router, con) {
	return {
		getEnemies: function (callback) {
			con.query("SELECT name, description, notes, hp_easy, hp_normal, hp_hard, hp_nightmare, hp_cataclysm FROM enemies", function (err, rows, fields) {
				var enemies = [];
				for (var i = 0; i < rows.length; i++) {
					var enemy = {};
					enemy.name = rows[i].name;
					enemy.description = rows[i].description;
					enemy.notes = [];
					var split = rows[i].notes.split("&&");
					for (var j = 0; j < split.length; j++) {
						var split2 = split[j].split("||");
						enemy.notes.push({title: split2[0], content: split2[1]});
					}
					enemy.hp = {
						"easy": rows[i].hp_easy,
						"normal": rows[i].hp_normal,
						"hard": rows[i].hp_hard,
						"nightmare": rows[i].hp_nightmare,
						"cataclysm": rows[i].hp_cataclysm
					};
					enemy.icon = "http://images.vermintideutility.com/enemies/icons/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					enemy.image = "http://images.vermintideutility.com/enemies/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					enemies.push(enemy);
				}
				callback(enemies);
			});
		},
		getEnemy: function (name, callback) {
			con.query("SELECT name, description, notes, hp_easy, hp_normal, hp_hard, hp_nightmare, hp_cataclysm FROM enemies WHERE name=" + con.escape(name), function (err, rows, fields) {
				res.set("Content-type", "application/json");
				if (rows.length == 0) {
					callback(null);
				} else {
					var enemy = {};
					enemy.name = rows[0].name;
					enemy.description = rows[0].description;
					enemy.notes = [];
					var split = rows[0].notes.split("&&");
					for (var i = 0; i < split.length; i++) {
						var split2 = split[i].split("||");
						enemy.notes.push({title: split2[0], content: split2[1]});
					}
					enemy.hp = {
						"easy": rows[i].hp_easy,
						"normal": rows[i].hp_normal,
						"hard": rows[i].hp_hard,
						"nightmare": rows[i].hp_nightmare,
						"cataclysm": rows[i].hp_cataclysm
					};
					enemy.icon = "http://images.vermintideutility.com/enemies/icons/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					enemy.image = "http://images.vermintideutility.com/enemies/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					callback(enemy);
				}
			});
		},

		getTrinkets: function (callback) {
			con.query("SELECT t.name, tt.description as description, tt.name as type, effect, r.name as rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id", function (err, rows, fields) {
				var trinkets = [];
				for (var i = 0; i < rows.length; i++) {
					var trinket = {};
					if (rows[i].description) {
						if (rows[i].description.indexOf("|val|") != -1) {
							trinket.description = rows[i].description.replace(/\|val\|/g, rows[i].effect);
						} else {
							trinket.description = rows[i].description;
						}
					}
					trinket.name = rows[i].name;
					trinket.type = rows[i].type;
					trinket.rarity = rows[i].rarity;
					trinket.image = rows[i].image;
					trinkets.push(trinket);
				}
				callback(trinkets);
			});
		},
		getTrinket: function (name, callback) {
			con.query("SELECT t.name, tt.description as description, tt.name as type, effect, r.name as rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id WHERE t.name=" + con.escape(name), function (err, rows, fields) {
				if (rows.length == 0) {
					callback(null);
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
					callback(trinket);
				}
			});
		}
	}
};