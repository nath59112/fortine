var bouton1;
var bouton2;
var bouton3;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",armes);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",materiaux);
    bouton3=document.getElementById("bouton3");
	bouton3.addEventListener("click",partir);
	}
function armes(){
	window.location="retail-mort1.html";
}
function materiaux(){
	window.location="retail-rencontredebut.html";
}
function partir(){
	window.location="retail-mortsnip.html";
}
window.addEventListener("load",debut);