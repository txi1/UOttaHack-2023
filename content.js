chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.type == 'dom') {
        sendResponse(document.documentElement.innerHTML);
    }
});