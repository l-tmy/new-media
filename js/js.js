// JavaScript Document
function addEvent(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}
addEvent(window,'scroll',function(){
    if (document.documentElement.scrollTop + document.body.scrollTop > 80) {
        document.getElementById("service_img").style.display = "block";
           }
     else {
        document.getElementById("service_img").style.display = "none";
           }
});
addEvent(window,'scroll',function(){
    if (document.documentElement.scrollTop + document.body.scrollTop > 1000) {
        document.getElementById("advantage_img").style.display = "block";
           }
     else {
        document.getElementById("advantage_img").style.display = "none";
           }
});
addEvent(window,'scroll',function(){
    if (document.documentElement.scrollTop + document.body.scrollTop > 1900) {
        document.getElementById("case_img").style.display = "block";
           }
     else {
        document.getElementById("case_img").style.display = "none";
           }
});
addEvent(window,'scroll',function(){
    if (document.documentElement.scrollTop + document.body.scrollTop > 3450) {
        document.getElementById("contact_img").style.display = "block";
           }
     else {
        document.getElementById("contact_img").style.display = "none";
           }
});
