var traits;
var traits_rarity = 0;
var currentTraits = [];
var stats_rarity = 0;

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
Array.prototype.slice.call(document.getElementsByName("stats_rarity").concat(document.getElementsByName("traits_rarity"))).forEach(function (element) {
	element.addEventListener('change', function () {
		switch (element.id) {
			case "stats_rarity_plentiful":
				stats_rarity = 0;
				updateWeaponStats(stats_rarity);
				break;
			case "stats_rarity_common":
				stats_rarity = 1;
				updateWeaponStats(stats_rarity);
				break;
			case "stats_rarity_rare":
				stats_rarity = 2;
				updateWeaponStats(stats_rarity);
				break;
			case "stats_rarity_exotic":
				stats_rarity = 3;
				updateWeaponStats(stats_rarity);
				break;
			case "stats_rarity_veteran":
				stats_rarity = 4;
				updateWeaponStats(stats_rarity);
				break;
			case "traits_rarity_common":
				traits_rarity = 0;
				clearTraits(1);
				break;
			case "traits_rarity_rare":
				traits_rarity = 1;
				clearTraits(2);
				break;
			case "traits_rarity_exotic":
				traits_rarity = 2;
				clearTraits(3);
				break;
			case "traits_rarity_veteran":
				traits_rarity = 3;
				setTrait(0, traits[3][0][0], true);
				setTrait(1, traits[3][0][1], true);
				setTrait(2, traits[3][0][2], true);
				break;
		}
	});
});

Array.prototype.slice.call(document.getElementsByClassName("trait_button")).forEach(function (element, index) {
	element.addEventListener('click', function () {
		showPossibleTraits(index, getPossibleTraits(index));
	});
});

function setTrait(index, trait, visible) {
	currentTraits[index] = trait;
	if (visible != undefined) {
		document.getElementById("trait" + index).style.display = visible ? "block" : "none";
	}
	if (visible == undefined || visible) {
		if (!trait) {
			trait = {name: "Please select a trait..."};
		}
		document.getElementById("trait" + index).innerHTML = Handlebars.templates["trait"](trait);
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
	document.getElementById("trait_picker").innerHTML = Handlebars.templates["traits"]({traits: traits, picker: true});
	Array.prototype.slice.call(document.getElementById("trait_picker").getElementsByClassName("trait")).forEach(function (element, index) {
		element.addEventListener('click', function () {
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
	traits[traits_rarity].forEach(function (element) {
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

function updateWeaponStats(rarity) {
	var statLabels = document.getElementsByClassName("stat_label");
	var hBars = document.getElementsByClassName("hbar");
	var vBars = document.getElementsByClassName("vbar");
	for (var i = 0; i < weapons[rarity].attacks.length; i++) {
		statLabels[i].innerHTML = statLabels[i].innerHTML.split(": ")[0] + ": " + weapons[rarity].attacks[i].damage.normal;
		hBars[i].style.width = ((weapons[rarity].attacks[i].damage.normal / 40) * 100) + "%";
		vBars[i].style.left = "calc(" + ((weapons[rarity].attacks[i].damage.normal / 40) * 100) + "% - 2.5px)";
	}
}

updateWeaponStats(0);
clearTraits(1);