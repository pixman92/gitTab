
window.onload = ()=>{
    makeNice();
}




//========================================

//file reserved for opening & deleting of grouped TAB objects

var str="";
function makeNice(){
    for(var i=0; i<tabGlobal.length; i++){
        str+=makeStr(["<div class='grid1'>", "<div>","<a href='", tabGlobal[i].url, ">", tabGlobal[i].title, "</a>", "</div>", "</div>" ]);
        
    }
    console.log('str', str);
    document.getElementById('placeHolder').innerHTML = str;
    
    if(!str){
        alert('Error, undefined')
    }
    str="";

}



//========================================

function makeStr(arr){
    return arr.join("")
}

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}