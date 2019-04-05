var bouton1;
var bouton2;
var bouton3;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",lootarme);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",lootmateriaux);
	bouton3=document.getElementById("bouton3");
	bouton3.addEventListener("click",mort2);
}
function lootarme(){
	window.location="tilted-faireunedancefortnite.html";
}
function lootmateriaux(){
	window.location="tilted-il se planque.html";
}
function mort2(){
	window.location="tilted-mort2.html";
}
window.addEventListener("load",debut);