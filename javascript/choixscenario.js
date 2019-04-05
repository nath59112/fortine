var bouton1;
var bouton2;
var bouton3;
var bouton5;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",dusty);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",junk);
    bouton3=document.getElementById("bouton3");
	bouton3.addEventListener("click",retail);
	bouton5=document.getElementById("bouton5");
	bouton5.addEventListener("click",tilted);
	}
function dusty(){
	window.location="dusty.html";
}
function junk(){
	window.location="junk.html";
}
function retail(){
	window.location="retail.html";
}
function tilted(){
	window.location="tilted.html";
}

window.addEventListener("load",debut);