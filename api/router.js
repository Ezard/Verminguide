module.exports = function (router, api) {

	router.get('/trinkets', function (req, res) {
		api.getTrinkets(function(trinkets) {
			res.header('Access-Control-Allow-Origin', 'localhost');
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
};