let min = document.getElementById('minus');
let plus = document.getElementById('plus');
let numPlace = document.getElementById('num');

min.addEventListener("click", () => {
    numPlace.innerText = parseInt(numPlace.textContent)-1;
    color();
});

plus.addEventListener("click", () => {
    numPlace.innerText = parseInt(numPlace.textContent)+1;
    color();
});

function color() {
    if (parseInt(numPlace.textContent) <= 0) {
        numPlace.style.color = 'red'; 
    } else {
        numPlace.style.color = 'green'; 
    }
}