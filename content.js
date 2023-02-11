chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'dom') {
        sendResponse(document.all[0].outerHTML);
    }
});
chrome.runtime.sendMessage({type:"log",log:""}, function(response){})