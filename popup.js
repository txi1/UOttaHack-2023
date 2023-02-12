import {addItem, addCategory} from './addItem.js';
import Cart from './cart.js';

window.onload = function() {
    // Cart.addCartItem("t1", "name1", "price", "image", "source");
    // Cart.addCartItem("t2", "name2", "price", "image", "source");
    // Cart.addCartItem("t2", "name3", "price", "image", "source");
    populateCartPage()
}

function populateCartPage() {
    let cart = Cart.loadCart();
    console.log(cart);
    for(let category in cart) {
        console.log(category);
        addCategory(category);
        // for(let item of cart[category]) {
        //     addItem(item);
        // }
    }
}

export function populateCategory(evt) {
    let test = evt.currentTarget.getAttribute("categoryId");
    console.log(test);
    let cart = Cart.loadCart();
    
}

function addToCart() {
    // let scrapedItem = scrape();
    let scrapedItem = null;
    return addItem(scrapedItem);
}

function removeFromCart(subclass, name) {
    Cart.removeCartItem(subclass, name);
}

document.getElementById("addToCart").addEventListener("click", addToCart);