console.log("background")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.type == "log"){
            console.log(request.log)
        }
        sendResponse()
    }
)