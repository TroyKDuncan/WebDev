var css = document.querySelectorAll("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomize = document.querySelector(".random");

// updates the background gradient and printed values
function changeColor() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css[0].textContent = "Left Color: " + color1.value;
  css[1].textContent = "Right Color: " + color2.value;
}

// returns random hex color value
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// assigns random values to both colors and then calls changeColor
function randomizeColors() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  changeColor();
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
randomize.addEventListener("click", randomizeColors);
