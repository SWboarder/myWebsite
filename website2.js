window.addEventListener("load", addHandlers, false);

function addHandlers(){
	var block = document.getElementById("education");
	if(!block){
		return;
	}
	block.onmouseover = stretchEducation;
	block.onmouseout = normalEducation;
}

function stretchEducation(){
	var block1 = document.getElementById("education");
	if(!block1){
		return;
	}
	else{
	var temp = block1.style.marginTop;
	block1.style.width = "40%";
	block1.style.marginTop = temp;
	}
	var block2 = document.getElementById("learn");
	if(!block2){return;}
	block2.style.width = "0%";
	var block3 = document.getElementById("educationIcon");
	if(!block3){return;}
	block3.innerHTML = "Education";
}

function normalEducation(){
	var block1 = document.getElementById("education");
	if(!block1){return;}
	block1.style.width = "20%";
	var block2 = document.getElementById("learn");
	if(!block2){return;}
	block2.style.width = "20%";
	var block3 = document.getElementById("educationIcon");
	if(!block3){return;}
	block3.innerHTML = "";
}

