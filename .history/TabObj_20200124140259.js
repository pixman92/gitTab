//file for TAB object framework

var SingleTAB - function(date, title, tabs){
    var tmpDate = new Date();
    this.date = tmpDate;

    this.t
}






var BIGTAB = function (SingleTAB){
    if(this.singleTabArr==undefined){
        this.singleTabArr = [];
    }else{
        this.singleTabArr.push(SingleTAB);
    }
}