var traits;
var rarity = 0;
var currentTraits = [];

Handlebars.partials = Handlebars.templates;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		traits = JSON.parse(xhr.responseText);
	}
};
xhr.open("GET", (window.location + "").replace(/localhost|vermintideutility\.com/, "api.vermintideutility.com") + "/traits");
xhr.send();

document.getElementById("shield").addEventListener('click', function () {
	setTraitPickerOpen(false);
});
Array.prototype.slice.call(document.getElementsByName("rarity")).forEach(function (element, index, array) {
	element.addEventListener('change', function () {
		switch (element.id) {
			case "rarity_uncommon":
				rarity = 0;
				clearTraits(1);
				break;
			case "rarity_rare":
				rarity = 1;
				clearTraits(2);
				break;
			case "rarity_exotic":
				rarity = 2;
				clearTraits(3);
				break;
			case "rarity_veteran":
				rarity = 3;
				setTrait(0, traits[3][0][0], true);
				setTrait(1, traits[3][0][1], true);
				setTrait(2, traits[3][0][2], true);
				break;
		}
	});
});

Array.prototype.slice.call(document.getElementsByClassName("trait_button")).forEach(function (element, index, array) {
	element.addEventListener('click', function () {
		var traits = getPossibleTraits(index);
		if (traits == -1) alert("Please select the previous trait first");
		else showPossibleTraits(index, traits);
	});
});

function setTrait(index, trait, visible) {
	currentTraits[index] = trait;
	if (visible != undefined) {
		document.getElementById("trait" + index).style.display = visible ? "block" : "none";
	}
	if (visible == undefined || visible) {
		if (!trait) trait = {name: "Please select a trait..."};
		document.getElementById("trait" + index).innerHTML = Handlebars.templates["trait"](trait);
	}
	for(var i = index + 1; i < 3; i++) {
		setTrait(i, null, rarity + 1 > i);
	}
}

function clearTraits(numTraitsVisible) {
	setTrait(0, null, numTraitsVisible > 0);
	setTrait(1, null, numTraitsVisible > 1);
	setTrait(2, null, numTraitsVisible > 2);
	currentTraits = [];
}


function setTraitPickerOpen(open) {
	document.getElementById("shield").style.display = document.getElementById("trait_picker").style.display = (open ? "block" : "none");
}

function showPossibleTraits(i, traits) {
	document.getElementById("trait_picker").innerHTML = Handlebars.templates["traits"]({traits: traits});
	Array.prototype.slice.call(document.getElementsByClassName("trait")).forEach(function (element, index, array) {
		element.addEventListener('click', function () {
			setTrait(i, {name: element.dataset.name, description: element.dataset.description});
		});
	});
	setTraitPickerOpen(true);
}

function getPossibleTraits(index) {
	if (index > currentTraits.length) return -1;
	var possible = [];
	traits[rarity].forEach(function (element) {
		var okay = true;
		for (var i = 0; i < index; i++) {
			if (element[i].name != currentTraits[i].name) {
				okay = false;
				break;
			}
		}
		if (okay && !possible.some(function (e) {
				return e.name == element[index].name && e.description == element[index].description;
			})) {
			possible.push(element[index]);
		}
	});
	possible.sort(function (a, b) {
		return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
	});
	return possible;
}

clearTraits(1);