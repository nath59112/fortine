var bouton1;
var bouton2;


function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",salty);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",tilted);
}
function salty(){
	window.location="junk-parttoutseulverssalty.html";
}
function tilted(){
	window.location="junk-suitlemecverstilted.html";
}


window.addEventListener("load",debut);