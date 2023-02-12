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
        console.log(product)
        price = domContent.getElementsByClassName("a-offscreen")[0].innerText
        console.log(price)
    }
}

function doDOMstuff(dom){
    const doc = new DOMParser().parseFromString(dom, "text/html")
    scrape(doc)
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {type:"dom"}, function(response) {doDOMstuff(response)})
});

