console.log('universal S');

//uni s.png//

chrome.runtime.onMessage.addListener(gotMessage);   //this message will appear in console log not in background page//

function gotMessage ( message,sender,sendResponse){
    console.log(message.txt);
    if (message.txt="hello"){
        let filenames=[
            "unis.jpg",
            
        ];
    
        let imgs=document.getElementsByTagName('img');
        
            for(imgElt of imgs){
            let r = Math.floor(Math.random()*filenames.length);
            let file = 'pics/'+ filenames[r];
            let url = chrome.extension.getURL(file);
            imgElt.src=url;
            console.log(url);
        } 
    }
}