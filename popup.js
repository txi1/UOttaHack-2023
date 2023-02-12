import { addCategory, addItem, removeItems } from './addItem.js';
import Cart from './cart.js';

window.onload = function() {
    populateCartPage()
}

let url = ""
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    url = tabs[0].url;
});

function scrape(domContent){
    console.log(domContent)
    let product = null
    let price = null
    if(url.includes("amazon")){
        product = domContent.getElementById("productTitle").innerText
        price = domContent.getElementsByClassName("priceToPay")[0].innerText
    }
    return {"name":product,"price":price,"source":url}
}

function doDOMstuff(dom){
    const doc = new DOMParser().parseFromString(dom, "text/html")
    let scrapedItem = scrape(doc)
    Cart.addCartItem(scrapedItem["name"], scrapedItem["price"], scrapedItem["image"], scrapedItem["source"]);
    regenerate(Cart.category);
    console.log(Cart.loadCart());
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

export function populateCategory(evt) {
    let categoryName = evt.currentTarget.getAttribute("categoryId");
    console.log(categoryName);
    removeItems();
    if(categoryName === Cart.category) {
        Cart.category = null;
        return;
    }
    regenerate(categoryName);
}

function addToCart() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type:"dom"}, function(response) {doDOMstuff(response)})
    });
}

function removeFromCart(subclass, name) {
    Cart.removeCartItem(subclass, name);
}

function regenerate(categoryName){
    removeItems();
    if(categoryName === null){
   
        return;
    }
    let cart = Cart.loadCart();
    addItem("legend", categoryName);
    for (let itemIndex in cart[categoryName]) {
        addItem(cart[categoryName][itemIndex], categoryName);
    }
    Cart.updateCategory(categoryName)
}

document.getElementById("addToCart").addEventListener("click", addToCart);
