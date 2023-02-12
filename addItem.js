import { populateCategory } from "/popup.js";

export async function addItem(item, category) {
    if (item === null) {
        item = { name: "test item", price: "1", image: "gr" }
    } else if (item == "legend") {
        const fragment = document.createDocumentFragment();

        const li = fragment.appendChild(document.createElement('li'));



        let table = document.createElement("table");
        table.setAttribute("class", "item");
        table.style.width = "100%";
        table.style.border = "0.5px solid black";
        let name = document.createElement("th");
        name.style.width = "50%";

        let price = document.createElement("th");
        price.style.width = "25%";

        let remove = document.createElement("th");
        remove.style.width = "25%";

        table.appendChild(name).textContent = "Product";
        table.appendChild(price).textContent = "Price";
        table.appendChild(remove).textContent = "";

        fragment.querySelector("li").appendChild(table);
        fragment.querySelector("li").setAttribute("itemId", item["name"]);

        fragment.querySelector("li").setAttribute("class", "itemLi");



        document.querySelector('[categoryid="' + category + '"]').appendChild(fragment);
        return item;
    } else {
        const fragment = document.createDocumentFragment();

        const li = fragment.appendChild(document.createElement('li'));



        let table = document.createElement("table");
        table.setAttribute("class", "item");
        table.style.width = "100%";
        table.style.border = "0.5px solid black";
        let name = document.createElement("th");
        name.style.width = "50%";

        let price = document.createElement("th");
        price.style.width = "25%";

        let remove = document.createElement("th");
        remove.style.width = "25%";

        table.appendChild(name).textContent = item["name"];
        table.appendChild(price).textContent = item["price"];
        table.appendChild(remove).textContent = "remove";

        fragment.querySelector("li").appendChild(table);
        fragment.querySelector("li").setAttribute("itemId", item["name"]);

        fragment.querySelector("li").setAttribute("class", "itemLi");



        document.querySelector('[categoryid="' + category + '"]').appendChild(fragment);
        return item;
    }
    
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
    fragment.querySelector("li").appendChild(document.createElement('img')).setAttribute("class", "dropdownIcon");
    fragment.querySelector("li").querySelector('img').setAttribute("src", "dropdown.png");
  //  fragment.querySelector("li").querySelector('img').style = "float: right";

    fragment.querySelector("li").setAttribute("categoryId", category);

    fragment.querySelector("li").addEventListener("click", populateCategory, false);

   
  
  
    document.getElementById("categoryList").appendChild(fragment);
    return category;
}

export async function removeItems() {
    const elements = document.getElementsByClassName("item");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        document.querySelector("html").style.height = document.querySelector(".main-container").clientHeight;
    }
}