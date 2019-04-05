var bouton1;


function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",suite);
	}
function suite(){
	window.location="html/choixscenario.html";
}

window.addEventListener("load",debut);