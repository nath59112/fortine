var bouton1;
var bouton2;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",top1);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",top2);
}
function top1(){
	window.location="retail-top1.html";
}
function top2(){
	window.location="retail-top2.html";
}

window.addEventListener("load",debut);