
window.onload = ()=>{
    
   receiveMessage();
}


async function receiveMessage(){
    chrome.runtime.onMessage.addListener((request, sender, response)=>{
        console.log('sent', sender.tab);
        console.log('response', response);

        return Promise.resolve("done");

    });

}



//========================================

//file reserved for opening & deleting of grouped TAB objects

var str="";
function makeNice(){
    // if(!tabGlobal){
    //     wait(1700).then(()=>{
    //         makeNice();
    //     });
    // }
    for(var i=0; i<tabGlobal.length; i++){
        str+=makeStr(["<div class='grid1'>", "<div>","<a href='", tabGlobal[i].url, ">", tabGlobal[i].title, "</a>", "</div>", "</div>" ]);
        
    }
    console.log('str', str);
    document.getElementById('placeHolder').innerHTML = str;
    
    // if(!str){
    //     alert('Error, undefined')
    // }
    str="";

}



//========================================

function makeStr(arr){
    return arr.join("")
}

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}