module.exports = function (router, api) {

	router.get('/enemies', function (req, res) {
		api.getEnemies(function (enemies) {
			setHeaders(res);
			res.end(JSON.stringify(enemies));
		});
	});

	router.get("/enemies/:name([a-zA-Z',\-\s]+)", function (req, res) {
		api.getEnemy(req.params.name.replace(/-/g, ' '), function (enemy) {
			setHeaders(res);
			if (enemy == null) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
			} else {
				res.end(JSON.stringify(enemy));
			}
		});
	});

	router.get('/heroes', function (req, res) {
		api.getHeroes(function (heroes) {
			setHeaders(res);
			res.end(JSON.stringify(heroes));
		})
	});

	router.get('/trinkets', function (req, res) {
		api.getTrinkets(function (trinkets) {
			setHeaders(res);
			res.end(JSON.stringify(trinkets));
		});
	});

	router.get("/trinkets/:name([a-zA-Z',\-\s]+)", function (req, res) {
		api.getTrinket(req.params.name.replace(/-/g, ' '), function (trinket) {
			setHeaders(res);
			if (trinket == null) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
			} else {
				res.end(JSON.stringify(trinket));
			}
		});
	});

	router.get('/weapons', function (req, res) {
		api.getWeapons(function (weapons) {
			setHeaders(res);
			res.end(JSON.stringify(weapons));
		});
	});

	router.get("/weapons/:name([a-zA-Z',\-\s]+)", function (req, res) {
		api.getWeaponsByClass(req.params.name.replace(/-/g, ' '), function (trinket) {
			setHeaders(res);
			if (trinket == null) {
				res.status(404).end(JSON.stringify({"error": {"message": "Sorry, that resource does not exist"}}));
			} else {
				res.end(JSON.stringify(trinket));
			}
		});
	});
};

function setHeaders(res) {
	res.set("Content-type", "application/json");
}