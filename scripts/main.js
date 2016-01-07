//var Handlebars = require('handlebars');

function goToPage(page) {
	document.getElementById("content").style.opacity = 0;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		document.getElementById("content").innerHTML = xhr.responseText;
		document.getElementById("content").style.opacity = 1;
		window.history.pushState({}, page, page);
	};
	xhr.open("GET", "/content/" + page + ".handlebars", true);
	xhr.send();
}