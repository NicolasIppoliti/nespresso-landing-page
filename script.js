const circle = document.querySelector(".circle");
const textColor = document.querySelector(".brand-name");
const buttonColor = document.querySelector(".learn-more");
const nespresso = document.querySelector(".nespresso");

async function slider(anything) {
  nespresso.src = anything;
}

async function changeColor(color) {
  circle.style.background = color;
  textColor.style.color = color;
  buttonColor.style.background = color;
}
