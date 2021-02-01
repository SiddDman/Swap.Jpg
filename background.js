console.log("working");

chrome.browserAction.onClicked.addListener(buttonClicked)


function buttonClicked(tab) {      //this message will appear in console log not in background page//
    let msg={
        txt:"hello"
     } 
    chrome.tabs.sendMessage(tab.id,msg);
}
