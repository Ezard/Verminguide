window.addEventListener('load', function () {
	document.body.addEventListener('click', function (event) {
		var target = event.target;
		if (!target.href) target = target.parentNode;
		if (target.href && event.button == 0 && target.origin == document.location.origin && window.history && history.pushState) {
			event.preventDefault();
			setContent(target.href);
			setMenuOpen(false);
		}
	});
}, false);

window.onpopstate = function (event) {
	if (window.history && history.pushState) {
		event.preventDefault();
		setContent(document.location.href);
	}
};

Handlebars.registerHelper('booleanToYesNo', function (bool) {
	return bool ? "yes" : "no";
});

Handlebars.registerHelper('smallerFont', function (str) {
	if (str.length >= 15) {
		return 'class="smaller_text" ';
	} else {
		return "";
	}
});

function setContent(url) {
	document.getElementById("content").style.opacity = 0.5;
	getContent(url, function (html) {
		document.getElementById("content").innerHTML = html;
		document.getElementById("content").style.opacity = 1;
		window.history.pushState({}, "", url);
	});
}

function getContent(url, callback) {
	var type;
	if (/heroes\/?/.test(url)) {
		if (/heroes\/[a-zA-Z',\-\s]+\/?$/.test(url)) {
			type = "hero";
		} else {
			type = "heroes";
		}
	}
	if (/enemies\/?/.test(url)) {
		if (/enemies\/[a-zA-Z',\-\s]+\/?$/.test(url)) {
			type = "enemy";
		} else {
			type = "enemies";
		}
	}
	if (/weapon\/?/.test(url)) {
		if (/weapons\/[a-zA-Z',\-\s]+\/?$/.test(url)) {
			type = "weapon";
		} else {
			type = "weapons";
		}
	}
	if (/trinkets\/?/.test(url)) {
		if (/trinkets\/[a-zA-Z',\-\s]+\/?$/.test(url)) {
			type = "trinket";
		} else {
			type = "trinkets";
		}
	}
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var obj = {};
			obj[type] = JSON.parse(xhr.responseText);
			callback(Handlebars.templates[type](obj));
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