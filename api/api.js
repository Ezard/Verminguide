module.exports = function (router, con) {
	return {
		getEnemies: function (callback) {
			con.query("SELECT name, description, notes, hp_easy, hp_normal, hp_hard, hp_nightmare, hp_cataclysm, armoured FROM enemies", function (err, rows, fields) {
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
					enemy.armoured = rows[i].armoured == 1;
					enemy.icon = "http://static.vermintideutility.com/enemies/icons/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					enemy.image = "http://static.vermintideutility.com/enemies/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					enemies.push(enemy);
				}
				callback(enemies);
			});
		},
		getEnemy: function (name, callback) {
			con.query("SELECT name, description, notes, hp_easy, hp_normal, hp_hard, hp_nightmare, hp_cataclysm, armoured FROM enemies WHERE name=" + con.escape(name), function (err, rows, fields) {
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
					enemy.armoured = rows[i].armoured == 1;
					enemy.icon = "http://static.vermintideutility.com/enemies/icons/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					enemy.image = "http://static.vermintideutility.com/enemies/" + enemy.name.toLowerCase().replace(/ /g, "_") + ".png";
					callback(enemy);
				}
			});
		},

		getTrinkets: function (callback) {
			con.query("SELECT t.name, tt.description AS description, tt.name AS type, effect, r.name AS rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id", function (err, rows, fields) {
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
					trinket.image = "http://static.vermintideutility.com/trinkets/" + trinket.name.toLowerCase().replace(/ /g, "_").replace(/[',]/g, "") + ".png";
					trinkets.push(trinket);
				}
				callback(trinkets);
			});
		},
		getTrinket: function (name, callback) {
			con.query("SELECT t.name, tt.description AS description, tt.name AS type, effect, r.name AS rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id WHERE t.name=" + con.escape(name), function (err, rows, fields) {
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
					trinket.image = "http://static.vermintideutility.com/trinkets/" + trinket.name.toLowerCase().replace(/ /g, "_").replace(/[',]/g, "") + ".png";
					callback(trinket);
				}
			});
		},

		getWeapons: function (callback) {
			con.query("SELECT wc.id, wc.name, description, h.name AS hero FROM weapon_classes wc INNER JOIN heroes h ON wc.hero=h.id ORDER BY wc.id", function (err, rows, fields) {
				var weapon_classes = [];
				for (var i = 0; i < rows.length; i++) {
					weapon_classes[rows[i].id - 1] = {
						"name": rows[i].name,
						"description": rows[i].description,
						"hero": rows[i].hero,
						"weapons": []
					};
				}
				con.query("SELECT w.name, r.name as rarity, weapon_class FROM weapons w LEFT JOIN rarities r ON w.rarity=r.id", function (err, rows, fields) {
					for (var i = 0; i < rows.length; i++) {
						weapon_classes[rows[i].weapon_class - 1].weapons.push({
							"name": rows[i].name,
							"rarity": rows[i].rarity
						});
					}
					callback(weapon_classes);
				});
			});
		},

		getWeaponsByClass: function (weapon_class, callback) {
			con.query("SELECT wc.id, wc.name, description, h.name AS hero FROM weapon_classes wc INNER JOIN heroes h ON wc.hero=h.id WHERE wc.name=" + con.escape(weapon_class) + " ORDER BY wc.id", function (err, rows, fields) {
				if (rows.length == 0) {
					callback(null);
				} else {
					var weapon_class = {
						"name": rows[0].name,
						"description": rows[0].description,
						"hero": rows[0].hero,
						"weapons": []
					};
					con.query("SELECT w.name, r.name as rarity, weapon_class FROM weapons w LEFT JOIN rarities r ON w.rarity=r.id WHERE weapon_class=" + rows[0].id, function (err, rows, fields) {
						for (var i = 0; i < rows.length; i++) {
							weapon_class.weapons.push({
								"name": rows[i].name,
								"rarity": rows[i].rarity
							});
						}
						callback(weapon_class);
					});
				}
			});
		}
	}
};