export default async function addItem(item){
    if(item === null){
        item = {name:"test item", price:"1", image:"gr"}
    }
    console.log("item to add: "+item)
    const fragment = document.createDocumentFragment();
    const li = fragment
    .appendChild(document.createElement('li'))
    .appendChild(document.createElement('img')).setAttribute("class", "icon");
    console.log(item["image"]);
    fragment.querySelector("img").setAttribute("src", item["image"]);
    fragment.querySelector("li").setAttribute("class", "item");
    console.log(item["name"]);
    fragment.querySelector("li").appendChild(document.createElement("span")).textContent = item["name"];
    // fragment.querySelector("li").textContent = "Test Item";
    // li.querySelector('img').src = "placeholder.png";
    
    document.getElementById("itemList").appendChild(fragment);
}

