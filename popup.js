import addItem from './addItem.js';
import Cart from './cart.js';

window.onload = function() {
    console.log("dommy mommy");
    // populateCartPage();

    console.log(Cart.loadCart());
    // Cart.addCartItem("t1", "name1", "price", "image", "source");
    // Cart.addCartItem("t2", "name2", "price", "image", "source");
    // Cart.addCartItem("t2", "name3", "price", "image", "source");
    populateCartPage()
}

function populateCartPage() {
    let cart = Cart.loadCart();
    for(let category in cart) {
        for(let item of cart[category]) {
            addItem(item);
        }
    }
}

function addToCart() {

}