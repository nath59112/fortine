var bouton1;
var bouton2;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",aller);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",casser);
}
function aller(){
	window.location="alleraveclui.html";
}
function casser(){
	window.location="casserlatour.html";
}

window.addEventListener("load",debut);