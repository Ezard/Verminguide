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
					if (type == "trinkets") {
						 result = Handlebars.templates.trinkets(json);
					}
					document.getElementById("content").innerHTML = result;
					document.getElementById("content").style.opacity = 1;
					window.history.pushState({}, page, page);
				}
			};
			var path;
			var match;
			var page = target.href.replace("http://vermintideutility.com/", "").replace("http://localhost/", "");
			if (/trinkets\/?/.test(page)) {
				path = "trinkets/";
				type = "trinkets";
			} else if (match = page.match(/trinkets\/([a-zA-Z',\-\s%20]+)/)) {
				path = "trinkets/" + match[0];
				type = "trinket";
			}
			//xhr.open("GET", "http://api.localhost/" + path, true);
			xhr.open("GET", "http://api.vermintideutility.com/" + path, true);
			xhr.send();
		}
	});
}, false);

window.onpopstate = function (event) {
	if (window.history && history.pushState) {
//			event.preventDefault();
		console.log(document.location.pathname);
	}
};

function goToPage(page) {
	document.getElementById("content").style.opacity = 0;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		document.getElementById("content").innerHTML = xhr.responseText;
		document.getElementById("content").style.opacity = 1;
		window.history.pushState({}, page, page);
	};
	var path;
	var match;
	page = page.replace("http://vermintideutility.com/", "");
	if (page.matches(/trinkets\/?/)) {
		path = "trinkets/";
	} else if (match = page.match(/trinkets\/([a-zA-Z',\-\s%20]+)/)) {
		path = "trinkets/" + match[0];
	}
	xhr.open("GET", "http://api.vermintideutility.com/" + path, true);
	xhr.send();
}

function setMenuOpen(open) {
	if (open) {
		document.getElementById("menu").className = "expanded";
	} else {
		document.getElementById("menu").className = "";
	}
}