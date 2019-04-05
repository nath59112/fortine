var bouton4;

function debut(){
	bouton4=document.getElementById("bouton4");
	bouton4.addEventListener("click",retour);
}
function retour(){
	window.location="../index.html";
}

window.addEventListener("load",debut);