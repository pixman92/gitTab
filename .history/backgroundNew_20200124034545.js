window.onload = ()=>{
    document.getElementById('var tab
function pullCurrentWindow(){
    showBackground();
    chrome.tabs.query({currentWindow: true}, (tab)=>{
        console.log('tab', tab);
        tabGlobal = tab;
    });
}    

function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}')
}





//========================================
//functions for pulling Tab data

var tab
function pullCurrentWindow(){
    showBackground();
    chrome.tabs.query({currentWindow: true}, (tab)=>{
        console.log('tab', tab);
        tabGlobal = tab;
    });
}    


function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}
