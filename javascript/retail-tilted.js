var bouton1;
var bouton2;


function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",continuer);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",tuer);
}
function continuer(){
	window.location="retail-continueravec.html";
}
function tuer(){
	window.location="retail-letuer.html";
}


window.addEventListener("load",debut);