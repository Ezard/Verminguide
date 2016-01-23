window.addEventListener('load', function () {
	document.body.addEventListener('click', function (event) {
		var target = event.target;
		if (!target.href) target = target.parentNode;
		if (target.href && event.button == 0/* && target.origin == document.location.origin*/ && window.history && history.pushState) {
			event.preventDefault();
			document.getElementById("content").style.opacity = 0.5;
			getContent(target.href, function(html) {
				document.getElementById("content").innerHTML = html.replace(/<h1>.*<\/h1>/);
				document.getElementById("content").style.opacity = 1;
				window.history.pushState({}, "", target.href);
			});
		}
	});
}, false);

window.onpopstate = function (event) {
	if (window.history && history.pushState) {
//			event.preventDefault();
		console.log(document.location);
	}
};

function getContent(url, callback) {
	var type;
	if (/enemies\/?/.test(url)) {
		if (/enemies\/[a-zA-Z',\-\s]+\/?$/.test(url)) {
			type = "enemy";
		} else {
			type = "enemies";
		}
	}
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			callback(Handlebars.templates[type](JSON.parse(xhr.responseText)));
		}
	};
	xhr.open("GET", url.replace("http://", "http://api."), true);
	xhr.send();
}

function setMenuOpen(open) {
	if (open) {
		document.getElementById("menu").className = "expanded";
	} else {
		document.getElementById("menu").className = "";
	}
}