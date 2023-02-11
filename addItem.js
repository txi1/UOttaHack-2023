async function addItem(){
    const fragment = document.createDocumentFragment();
    const li = fragment
    .appendChild(document.createElement('li'))
    .appendChild(document.createElement('img')).setAttribute("class", "icon");
    fragment.querySelector("img").setAttribute("src", "placeholder.png");
    fragment.querySelector("li").setAttribute("class", "item");
    fragment.querySelector("li").appendChild(document.createElement("span")).textContent = "Test Item";
    // fragment.querySelector("li").textContent = "Test Item";
    // li.querySelector('img').src = "placeholder.png";
    
    document.getElementById("itemList").appendChild(fragment);
}

document.getElementById("testButton").addEventListener("click", addItem);
