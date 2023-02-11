async function scrape(url){
    debugger
    let response = await fetch(url)
    response = await response.text()
    const parser = new DOMParser
    const htmlDoc = parser.parseFromString(response, "text/html")
    console.log("running")
    console.log(htmlDoc)
}

document.getElementById("button").onclick=scrape