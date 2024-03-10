function slider(anything) {
    document.querySelector('.nespresso').src = anything;
}

function changeColor(color) {
    const circle = document.querySelector('.circle');
    const textColor = document.querySelector('.brand-name');
    const buttonColor = document.querySelector('.learn-more');
    circle.style.background = color;
    textColor.style.color = color;
    buttonColor.style.background = color;
}