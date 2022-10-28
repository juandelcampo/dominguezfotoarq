// responsive nav bar

const menu = document.querySelector("#responsive-menu");
const showMenu = document.querySelector("nav ul");
menu.addEventListener("click", function() {
	if (showMenu.style.display === "none") {
		showMenu.style.display = "block";
	} else {
		showMenu.style.display = "none";
	}
});
// display menu by default on changing screen size
window.onresize = function() {
  // this.alert(window.screen.width)
	if (window.screen.width > 600) {showMenu.style.display = "block";}
	else if (window.screen.width < 600) {showMenu.style.display = "none";}
};

// image CROUSAL or SLIDER code

// everything is copied one time for the second crousal with vairable names following additional 1
const left = document.querySelector("header .left");
const right = document.querySelector("header .right");

const left1 = document.querySelector("#testimony .left");
const right1 = document.querySelector("#testimony .right");

const slider = document.querySelector("header .slider");
const slider1 = document.querySelector("#testimony .slider");

const indicatorParent = document.querySelector("header .control ul");
const indicators = document.querySelectorAll("header .control li");
index = 0;
const indicatorParent1 = document.querySelector("#testimony .control ul");
const indicators1 = document.querySelectorAll("#testimony .control li");
index1 = 0;

indicators.forEach((indicator, i) => {
	indicator.addEventListener("click", () => {
		document
			.querySelector("header .control .selected")
			.classList.remove("selected");
		indicator.classList.add("selected");
		slider.style.transform = "translateX(" + i * -25 + "%)";
		index = i;
	});
});
indicators1.forEach((indicator1, i) => {
	indicator1.addEventListener("click", () => {
		document
			.querySelector("#testimony .control .selected")
			.classList.remove("selected");
		indicator1.classList.add("selected");
		slider1.style.transform = "translateX(" + i * -20 + "%)";
		index1 = i;
	});
});

left.addEventListener("click", function() {
	index = index > 0 ? index - 1 : 0;
	document
		.querySelector("header .control .selected")
		.classList.remove("selected");
	indicatorParent.children[index].classList.add("selected");
	slider.style.transform = "translateX(" + index * -25 + "%)";
});

left1.addEventListener("click", function() {
	index1 = index1 > 0 ? index1 - 1 : 0;
	document
		.querySelector("#testimony .control .selected")
		.classList.remove("selected");
	indicatorParent1.children[index1].classList.add("selected");
	slider1.style.transform = "translateX(" + index1 * -20 + "%)";
});

right.addEventListener("click", function() {
	index = index < 4 - 1 ? index + 1 : 3;
	document
		.querySelector("header .control .selected")
		.classList.remove("selected");
	indicatorParent.children[index].classList.add("selected");
	slider.style.transform = "translateX(" + index * -25 + "%)";
});

right1.addEventListener("click", function() {
	index1 = index1 < 5 - 1 ? index1 + 1 : 4;
	document
		.querySelector("#testimony .control .selected")
		.classList.remove("selected");
	indicatorParent1.children[index1].classList.add("selected");
	slider1.style.transform = "translateX(" + index1 * -20 + "%)";
});
