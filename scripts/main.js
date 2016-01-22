window.addEventListener('load', function () {
	document.body.addEventListener('click', function (event) {
		var type = "";
		var target = event.target;
		if (!target.href) target = target.parentNode;
		if (target.href && event.button == 0 && target.origin == document.location.origin && window.history && history.pushState) {
			event.preventDefault();
			document.getElementById("content").style.opacity = 0.5;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					var json = JSON.parse(xhr.responseText);
					var result;
					console.log(type);
					if (type == "trinkets") {
						 result = Handlebars.templates.trinkets(json);
					}
					if (type == "enemy") {
						result = Handlebars.templates.enemy(json);
					}
					document.getElementById("content").innerHTML = result;
					document.getElementById("content").style.opacity = 1;
					window.history.pushState({}, "", document.location.origin + "/" + path);
				}
			};
			var path;
			var match;
			console.log(target.href.replace("http://", "http://api."));
			var page = target.href.replace("http://vermintideutility.com/", "").replace("http://localhost/", "");
			console.log("page = " + page);
			if (/enemies\/?/.test(page)) {
				if (match = page.match(/enemies\/([a-zA-Z',\-\s]+)\/?$/)) {
					console.log(match);
					path = "enemies/" + match[1];
					type = "enemy";
				} else {
					path = "enemies/";
					type = "enemies";
				}
			}
			//xhr.open("GET", "http://api.localhost/" + path, true);
			var s = "http://api.vermintideutility.com/" + path;
			console.log(s);
			xhr.open("GET", s, true);
			xhr.send();
		}
	});
}, false);

window.onpopstate = function (event) {
	if (window.history && history.pushState) {
//			event.preventDefault();
		console.log(document.location);
	}
};

function setMenuOpen(open) {
	if (open) {
		document.getElementById("menu").className = "expanded";
	} else {
		document.getElementById("menu").className = "";
	}
}