module.exports = function (router, api) {

	router.get('/enemies', function (req, res) {
		api.getEnemies(function(enemies) {
			res.set("Content-type", "application/json");
			res.end(JSON.stringify(enemies));
		});
	});

	router.get("/enemies/:name([a-zA-Z',\-\s%20]+)", function (req, res) {
		api.getEnemy(req.params.name, function(enemy) {
			res.set("Content-type", "application/json");
			if (enemy == null) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
			} else {
				res.end(JSON.stringify(enemy));
			}
		});
	});

	router.get('/trinkets', function (req, res) {
		api.getTrinkets(function(trinkets) {
			res.set("Content-type", "application/json");
			res.end(JSON.stringify(trinkets));
		});
	});

	router.get("/trinkets/:name([a-zA-Z',\-\s%20]+)", function (req, res) {
		api.getTrinket(req.params.name, function(trinket) {
			res.set("Content-type", "application/json");
			if (trinket == null) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
			} else {
				res.end(JSON.stringify(trinket));
			}
		});
	});

	router.get('/weapons', function (req, res) {
		api.getWeapons(function(weapons) {
			res.set("Content-type", "application/json");
			res.end(JSON.stringify(weapons));
		});
	});

	router.get("/weapons/:name([a-zA-Z',\-\s%20]+)", function (req, res) {
		api.getWeapons(req.params.name.toLowerCase(), function(trinket) {
			res.set("Content-type", "application/json");
			if (trinket == null) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
			} else {
				res.end(JSON.stringify(trinket));
			}
		});
	});
};