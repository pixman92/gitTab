
window.onload = ()=>{
    makeNice();
//    receiveMessage();
}


//========================================

//file reserved for opening & deleting of grouped TAB objects

var str=""; var tabSaved="";
function makeNice(){

    chrome.storage.sync.get(['tabSet'], (result)=>{
        tabSaved = result.tabSet;
        console.log('tab2', tabSaved);
        
        //========================================
        for(var i=0; i<tabSaved.length; i++){
            //required \" to make URL (a href) work!
            str+=makeStr(["<div class='grid1'>", "<div>","<a target='_blank'  href=\"", tabSaved[i].url.toString(), "\">", tabSaved[i].title.toString(), "</a>", "</div>", "</div>" ]);        
        }
        // console.log('str', str);
        document.getElementById('placeHolder').innerHTML = str;
        
        str="";
    });




}



//========================================

function makeStr(arr){
    return arr.join("")
}

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}