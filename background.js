
// var appState
// chrome.runtime.onMessage.addListener((req, sender, res)=>{
//     chrome.tabs.query({active: true}, function(tabs){
//         if(req.extensionState == "Enable"){
//             appState = true;
//         }else if(req.extensionState == "Disable"){
//             appState = false;
//         }
        
//     })
// });

var appState = false;
chrome.browserAction.onClicked.addListener((tab) => {
    if(!appState){
        appState = true;
        chrome.browserAction.setIcon({
            path: 'exIconActive.png',
            tabId: tab.id
        });
    }else{
        appState = false;
        chrome.browserAction.setIcon({
            path: 'exIconNonActive.png',
            tabId: tab.id
        });
    }

    chrome.tabs.executeScript({file: 'jquery.js'},function(){
        chrome.tabs.executeScript({
            code: `
                var appState = ${appState};
            `    
        },function(){
            chrome.tabs.executeScript({file: 'handler.js'});
        })
    })
})


