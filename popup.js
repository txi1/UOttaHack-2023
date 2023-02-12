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
    console.log(url)
    let product = null
    let price = null
    
    if(url.includes("www.amazon")){
        let price2 = "";
        product = domContent.getElementById("productTitle").innerText
        price = domContent.querySelector(".a-price .a-offscreen").innerText
        let dollarSignCount = 0;
        for(let i in price){
            if(price[i] === "$"){
                dollarSignCount++;
            }
            if(dollarSignCount >= 2){
                break;
            }
            price2 += price[i];
        }
        price = price2
    }else if(url.includes("www.ebay")){
        product = domContent.querySelector(".x-item-title__mainTitle .ux-textspans").innerText
        price = domContent.querySelector('[itemprop=price]').getAttribute("content")
        price = "$" + price
    }
    console.log({"name":product,"price":price,"source":url})
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

export function regenerate(categoryName){
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
