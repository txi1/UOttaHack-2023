<<<<<<< HEAD
import {populateCategory} from "/popup.js";

export async function addItem(item) {
=======
export async function addItem(item, category) {
>>>>>>> 827affccf15ed5419899adc40848edc288aa8ce8
    if(item === null) {
        item = {name:"test item", price:"1", image:"gr"}
    }
    const fragment = document.createDocumentFragment();
    const li = fragment
    .appendChild(document.createElement('li'))
    .appendChild(document.createElement('img')).setAttribute("class", "icon");
    fragment.querySelector("img").setAttribute("src", item["image"]);
    fragment.querySelector("li").setAttribute("class", "item");
    fragment.querySelector("li").appendChild(document.createElement("span")).textContent = item["name"];
    fragment.querySelector("li").setAttribute("itemId", item["name"]);
    
    document.getElementById(category).appendChild(fragment);
    return item;
}

export async function addCategory(category) {
    if(category === null) {
        category = "test category";
    }
    const fragment = document.createDocumentFragment();
    const li = fragment
    .appendChild(document.createElement('li'));
    fragment.querySelector("li").setAttribute("class", "category");
    fragment.querySelector("li").appendChild(document.createElement("span")).textContent = category;
    fragment.querySelector("li").setAttribute("categoryId", category);
    fragment.querySelector("li").addEventListener("click", populateCategory, false);
    document.getElementById("categoryList").appendChild(fragment);
    return category;
}

export async function removeItems() {
    const elements = document.getElementsByClassName("item");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}