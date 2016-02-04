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
		showPossibleTraits(index, getPossibleTraits(index));
	});
});

function setTrait(index, trait, visible) {
	if (trait == null) {
		console.log("Setting trait to null");
	} else {
		console.log(index);
		console.log(trait);
	}
	currentTraits[index] = trait;
	if (visible != undefined) {
		document.getElementById("trait" + index).style.display = visible ? "block" : "none";
	}
	if (visible == undefined || visible) {
		if (!trait) {
			trait = {name: "Please select a trait..."};
			console.log("Resetting trait");
		}
		document.getElementById("trait" + index).innerHTML = Handlebars.templates["trait"](trait);
	}
}

function clearTraits(numTraitsVisible) {
	console.log("Clearing traits");
	setTrait(0, null, numTraitsVisible > 0);
	setTrait(1, null, numTraitsVisible > 1);
	setTrait(2, null, numTraitsVisible > 2);
	currentTraits = [];
}


function setTraitPickerOpen(open) {
	document.getElementById("shield").style.display = document.getElementById("trait_picker").style.display = (open ? "block" : "none");
}

function showPossibleTraits(i, traits) {
	document.getElementById("trait_picker").innerHTML = Handlebars.templates["traits"]({traits: traits, picker: true});
	Array.prototype.slice.call(document.getElementById("trait_picker").getElementsByClassName("trait")).forEach(function (element, index, array) {
		element.addEventListener('click', function () {
			console.log("index: " + i);
			setTrait(i, {name: element.dataset.name, description: element.dataset.description});
		});
	});
	setTraitPickerOpen(true);
}

function getPossibleTraits(index) {
	var possible = [];
	var currentTraitsTemp = [];
	for (var i = 0; i < currentTraits.length; i++) {
		if (i != index) {
			currentTraitsTemp.push(currentTraits[i]);
		}
	}
	traits[rarity].forEach(function (element) {
		var count = 0;
		for (i = 0; i < currentTraitsTemp.length; i++) {
			if (currentTraitsTemp[i]) count++;
		}
		var temp = [];
		for (i = 0; i < element.length; i++) {
			if (currentTraitsTemp.some(function (e) {
					return e && e.name == element[i].name && e.description == element[i].description;
				})) {
				count--;
			} else {
				temp.push(element[i]);
			}
		}
		if (count == 0) {
			for (i = 0; i < temp.length; i++) {
				if (!possible.some(function (element) {
						return element.name == temp[i].name && element.description == temp[i].description;
					})) {
					possible.push(temp[i]);
				}
			}
		}
	});
	possible.sort(function (a, b) {
		return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
	});
	return possible;
}

clearTraits(1);