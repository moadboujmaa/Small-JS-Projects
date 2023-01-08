let spans = document.querySelectorAll('span');
let space = document.getElementById('bg');
let imgs = ['sky-1.jpg', 'sky-2.jpg', 'sky-3.jpg', 'sky-4.jpg', 'sky-5.jpg',]
let nb;

spans.forEach(element => {
    element.addEventListener('click', () => {
        if (!element.classList.contains('selected')) {
            spans.forEach(el => {
                el.classList.remove("selected");
            });
            element.classList.add("selected")
        };
    });
});

function changeImage() {
    spans.forEach(element => {
        if (element.classList.contains('selected')) {
            nb = element.classList[0].slice(-1);
            // console.log(nb);
            space.style.background = `url('./sky-${nb}.jpg')`;
            space.style.backgroundSize = "cover";
            space.style.backgroundPosition = "bottom";
        }
    });
}
setInterval(changeImage, 100);

