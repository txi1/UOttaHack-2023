import addItem from './addItem.js';
import Cart from './cart.js';

window.onload = function() {
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
    let scrapedItem = scrape();

}

function removeFromCart(subclass, name) {
    Cart.removeCartItem(subclass, name);
}

document.getElementById("addToCart").addEventListener("click", addToCart);