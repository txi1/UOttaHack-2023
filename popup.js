import {addItem, addCategory, removeItems} from './addItem.js';
import Cart from './cart.js';

window.onload = function() {
    // Cart.addCartItem("t1", "name1", "price", "image", "source");
    // Cart.addCartItem("t2", "name2", "price", "image", "source");
    // Cart.addCartItem("t2", "name3", "price", "image", "source");
    populateCartPage()
}

function populateCartPage() {
    removeItems();
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

function populateCategory(categoryName) {
    removeItems();
    let cart = Cart.loadCart();
    for(let itemIndex in cart[categoryName]){
        addItem(cart[categoryName][itemIndex], categoryName);
    }
}

function addToCart() {
    // let scrapedItem = scrape();
    let scrapedItem = {subclass:"t3", name:"pee bottle", price:"100", image:"a", source:"google.ca" };
    Cart.addCartItem(scrapedItem["subclass"], scrapedItem["name"], scrapedItem["price"], scrapedItem["image"], scrapedItem["source"]);
    console.log(Cart.loadCart());
}

function removeFromCart(subclass, name) {
    Cart.removeCartItem(subclass, name);
}

document.getElementById("addToCart").addEventListener("click", addToCart);