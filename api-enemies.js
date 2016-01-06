module.exports = function (router, con) {

	router.get('/enemies', function (req, res) {
		con.query("SELECT name, description, notes FROM enemies", function (err, rows, fields) {
			res.set("Content-type", "application/json");
			var enemies = [];
			for (var i = 0; i < rows.length; i++) {
				var obj = {};
				obj.name = rows[i].name;
				obj.description = rows[i].description;
				obj.notes = [];
				var split = rows[i].notes.split("&&");
				for (var j = 0; j < split.length; j++) {
					var split2 = split[j].split("||");
					obj.notes.push({title: split2[0], content: split2[1]});
				}
				obj.icon = "http://images.vermintideutility.com/enemies/" + obj.name.toLowerCase().replace(" ", "_") + "_icon.png";
				enemies.push(obj);
			}
			res.end(JSON.stringify(enemies));
		});
	});

	router.get("/enemies/:name([a-zA-Z',\-\s%20]+)", function (req, res) {
		con.query("SELECT name, description, notes FROM enemies WHERE name=" + con.escape(req.params.name), function (err, rows, fields) {
			res.set("Content-type", "application/json");
			if (rows.length == 0) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
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
				res.end(JSON.stringify(enemy));
			}
		});
	});
};