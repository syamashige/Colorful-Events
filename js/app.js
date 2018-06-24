
var colorBox = document.createElement('div');
colorBox.id = 'randomColor';
document.body.appendChild(colorBox);

    var colorButton = document.getElementById('colorific');
    colorButton.addEventListener('click', generateColor);

    function generateColor() {

        function getRandomColor(min, max) {
            return Math.floor(Math.random() * (max - min +1)) + min;
        }; 


        var colorElem = document.getElementById('randomColor');
        var r = getRandomColor(0, 225);
        var g = getRandomColor(0, 225);
        var b = getRandomColor(0, 225);
    
        colorElem.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }

