function getRandomColor() {
    let clr = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var color = "#"
    for (let i=1; i<=6; i++) {
        var c = clr[Math.floor(Math.random() * clr.length)];
        color += c;
    };
    return color;
};
function randomSize() {
    let size = Math.floor(Math.random() * 200); 
    return size;
}
console.log(getRandomColor());
$("document").ready(function() {
    $(".circle").on('click',function() {
        var size = randomSize(); 
        $(".circle").css("left", (Math.floor(Math.random() * 95))+"%");
        $(".circle").css("top", (Math.floor(Math.random() * 95))+"%");
        $(".circle").css("background", getRandomColor());
    });
});