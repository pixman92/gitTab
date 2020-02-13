window.onload = ()=>{
    document.getElementById('back').addEventListener('click', ()=>{
        if(!document.getElementById('title').value){
            
        }
        chrome.storage.sync.set({'saveMe': true});
        alert('true');
        pullCurrentWindow();
    });
    document.getElementById('savedButton').addEventListener('click', ()=>{
        chrome.storage.sync.set({'saveMe': false});
        alert('false');
        showBackground();
    });
}

//========================================
//functions for pulling Tab data

var tabGlobal = {};
function pullCurrentWindow(){
    //DIFICULT Function!!
    // works on getting current tabs
    // saving them to 'chrome' storage
    // and reproducing them in background.html
    var tabGlobal = {};
    chrome.tabs.query({currentWindow: true}, (tab)=>{
        console.log('tab', tab);
        preGlobal = tab;
        tabGlobal['title'] = document.getElementById('title').value;
        tabGlobal['tabs'] = preGlobal;
        chrome.storage.sync.set({'tabSet': tabGlobal});

    });
    console.log('tabGlobal1', tabGlobal);
    
    
    showBackground();

}    


function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}


//========================================

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}