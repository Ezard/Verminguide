document.getElementById("shield").addEventListener('click', function () {
	setTraitPickerOpen(false);
});
//document.getElementById("trait_picker").addEventListener('click', function (event) {
//	event.stopPropagation();
//});

function setTraitPickerOpen(open) {
	document.getElementById("shield").style.display = document.getElementById("trait_picker").style.display = (open ? "block" : "none");
}

function showTraits(index, traits) {
	document.getElementById("trait_picker").innerHTML = Handlebars.templates["traits"]({traits: traits});
	var items = document.getElementsByClassName("trait");
	for (var i = 0; i < items.length; i++) {
		addTraitClickListener(items[i], index);
	}
	setTraitPickerOpen(true);
}

function addTraitClickListener(e, index) {
	e.addEventListener('click', function () {
		console.log(e.dataset.name);
		//document.getElementById("trait" + index).innerHTML = e.dataset.name;
	});
}