let red = document.getElementById('red-num');
let green = document.getElementById('green-num');
let blue = document.getElementById('blue-num');
let redInp = document.getElementById('red');
let greenInp = document.getElementById('green');
let blueInp = document.getElementById('blue');
let body = document.querySelector('body');
let hexColor = document.getElementById('hex-color'); 


setInterval(changeText, 25);
function changeText() {
    let redV = redInp.value;
    let greenV = greenInp.value;
    let blueV = blueInp.value;
    red.innerText = `${redV}`;
    green.innerText = `${greenV}`;
    blue.innerText = `${blueV}`;
    body.style.background = `rgb(${redV}, ${greenV}, ${blueV})`
    hexColor.innerText = `${rgbToHex(redV, greenV, blueV)}`
}

function rgbToHex(red, green, blue) {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}