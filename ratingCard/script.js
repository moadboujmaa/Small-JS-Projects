let stars = document.querySelectorAll('.star');
let btn = document.getElementById('btn');
let msg = document.getElementById('msg');
let cross = document.getElementById('cross');
let textMsg = document.getElementById('para');
let stopHere = "";
let counter = 0;

stars.forEach(element => {
    element.addEventListener('click', () => {
        stopHere = element.className.split(' ')[0];
        stars.forEach(ele => {
            if (ele.className.split(' ')[0] <= stopHere) {
                ele.classList.add('active');
            } else {
                ele.classList.remove('active');
            }
        });
    });
});

btn.addEventListener('click', () => {
    resetCounter();
    stars.forEach(one => {
        if (one.classList.length == 3) {
            counter++;
        }
    });
    if (counter != 0) {
        textMsg.innerHTML = `Thank You,<br>You Gave Us ${counter} Stars`;
        msg.classList.add('show');
    } else {
        textMsg.innerHTML = `Rate Us First`;
        msg.classList.add('show');
    }
});

cross.addEventListener('click', () => {
    msg.classList.remove('show');
});

function resetCounter() {
    counter = 0;
}