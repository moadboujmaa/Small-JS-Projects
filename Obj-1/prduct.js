let div = document.getElementById('container');

let product1 = new Object({
    cover: './product.jpg',
    title: 'Medium Size Chair',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet..',
    price: '19.<span>99$',
});
let product2 = new Object({
    cover: './product2.jpg',
    title: 'Large Size Chair',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora soluta suscipit obcaecati rerum in aut quisquam eveniet hic distinctio!..',
    price: '39.<span>99$',
});

let cards = [product1, product2];
cards.forEach(card => {
    var ele = `<div class='card'><div class='card-img'><img src='${card.cover}'> </div> <div class='pr-info'> <h1>${card.title}</h1><p>${card.info}</p><h4 class='price'>${card.price}</span></h4><button>Buy Now</button></div></div>`;
    div.innerHTML += ele;
});