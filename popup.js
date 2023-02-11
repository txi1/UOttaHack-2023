let url = ""

function doDOMstuff(dom){
    chrome.runtime.sendMessage({type:"log",log:"dom"}, function(response){})
}
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {type:"dom"}, function(response) {doDOMstuff(response)})
});

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    url = tabs[0].url;
});