module.exports = function (router, con) {
	return {
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
			con.query("SELECT t.name, tt.description as description, tt.name as type, effect, r.name as rarity, image FROM trinkets t LEFT JOIN trinket_types tt ON t.type=tt.id LEFT JOIN rarities r ON t.rarity=r.id WHERE t.name=" + con.escape(req.params.name), function (err, rows, fields) {
				res.set("Content-type", "application/json");
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