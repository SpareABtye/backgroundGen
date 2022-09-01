const colorValues = document.querySelector('.colorValues'),
      color1 = document.getElementById('color1'),
      color2 = document.getElementById('color2'),
      color3 = document.getElementById('color3'),
      background = document.querySelector('#background');

const setBackground = () => {
    let two = document.getElementById('two-colors'),
        three = document.getElementById('three-colors');
        four = document.getElementById('four-colors');

    if (two.checked) {
        background.style.background =
        'linear-gradient( to right, ' + color1.value + ',' +
        color2.value + ')';
        colorValues.textContent = background.style.background + ';';
    }
    if (three.checked) {
        background.style.background =
        'linear-gradient( to right, ' + color1.value + ',' +
        color2.value + ',' + color3.value + ')';
        colorValues.textContent = background.style.background + ';';
    }
    if (four.checked) {
        background.style.background =
        'linear-gradient( to right, ' + color1.value + ',' +
        color2.value + ',' + color3.value + ',' + color4.value + ')';
        colorValues.textContent = background.style.background + ';';
    }
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);

document.addEventListener('DOMContentLoaded', function(){
    let options = document.getElementsByName('range'),
        two = document.getElementById('two-colors'),
        three = document.getElementById('three-colors'),
        four = document.getElementById('four-colors'),
        inputThree = document.getElementById('color3'),
        inputFour = document.getElementById('color4');

    setBackground();

    options.forEach(function(option){
      option.addEventListener('click', function(){
        if (three.checked) {

            inputThree.style.display = null;
            setBackground();
            inputThree.addEventListener("input", setBackground);

        } else if (four.checked) {

            inputThree.style.display = null;
            inputFour.style.display = null;
            setBackground();
            inputThree.addEventListener("input", setBackground);
            inputFour.addEventListener("input", setBackground);

        } else {

            inputThree.style.display = 'none';
            inputFour.style.display = 'none';
            setBackground();
            inputThree.removeEventListener("input", setBackground);
            inputFour.addEventListener("input", setBackground);

        }
      });
    });
    });
