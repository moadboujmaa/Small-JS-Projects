let nameIn = document.getElementById('name');
let priceIn = document.getElementById('price');
let qtsIn = document.getElementById('qt');
let btn = document.getElementById('btn');
var list = document.getElementById('list');

btn.addEventListener('click', () => {
    var itemName = nameIn.value;
    var itemPrice = priceIn.value;
    var itemQt = qtsIn.value;

    let product = new Object({
        Proname: itemName,
        price: itemPrice,
        quantity: itemQt
    });

    let msg = "";
    if (itemName == "") {
        msg += "-Type the name\n";
    }
    if (itemPrice == "") {
        msg += "-Type the price\n";
    } 
    if (itemQt == "") {
        msg += "-Type the quantity\n";
    } 

    if (msg != "") {
        alert(msg)
    } else {
        let item = `<li>
            <span>${itemName}</span>
            <span>${itemPrice}dh</span>
            <span>${itemQt}</span>
        </li>`;
        list.innerHTML += item;

        nameIn.value = "";
        priceIn.value = "";
        qtsIn.value = "";
    }
});