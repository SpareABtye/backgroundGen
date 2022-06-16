const colorValues = document.querySelector('.colorValues');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const background = document.querySelector('#background');

const setBackground = () => {
    background.style.background =
        'linear-gradient( to right, ' + color1.value + ',' +
        color2.value + ',' + color3.value + ')';
    colorValues.textContent = background.style.background + ';';

}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
color3.addEventListener("input", setBackground);