window.addEventListener("load", addHandlers, false);

function addHandlers(){
	var block = document.getElementById("education");
	if(!block){
		return;
	}
	block.onmouseover = stretchEducation;
	block.onmouseout = normalEducation;

	var block = document.getElementById("row-2-col-2");
	if(!block){
		return;
	}
	block.onmouseover = stretch2;
	block.onmouseout = normal2;

	var block = document.getElementById("row-3-col-3");
	if(!block){
		return;
	}
	block.onmouseover = stretch3;
	block.onmouseout = normal3;


	var block = document.getElementById("row-1-col-3");
	if(!block){
		return;
	}
	block.onmouseover = stretch4;
	block.onmouseout = normal4;

	var block = document.getElementById("row-3-col-1");
	if(!block){
		return;
	}
	block.onmouseover = stretch5;
	block.onmouseout = normal5;
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

function stretch2(){
	var block1 = document.getElementById("row-2");
	if(!block1){return;}
	block1.style.height = "300px";
	var block2 = document.getElementById("row-1");
	if(!block2){return;}
	block2.style.height = "100px";
	var block3 = document.getElementById("row-3");
	block3.style.height = "300px";
	if(!block3){return;}
}

function normal2(){
	var block1 = document.getElementById("row-2");
	if(!block1){return;}
	block1.style.height = "100px";
	var block2 = document.getElementById("row-1");
	if(!block2){return;}
	block2.style.height = "200px";
	var block3 = document.getElementById("row-3");
	block3.style.height = "400px";
	if(!block3){return;}
}

function stretch3(){
	var block1 = document.getElementById("row-3-col-3");
	if(!block1){return;}
	block1.style.width = "80%";
	var block2 = document.getElementById("row-3-col-2");
	if(!block2){return;}
	block2.style.width = "10%";
	var block3 = document.getElementById("row-3-col-1");
	block3.style.width = "10%";
	if(!block3){return;}
}

function normal3(){
	var block1 = document.getElementById("row-3-col-3");
	if(!block1){return;}
	block1.style.width = "45%";
	var block2 = document.getElementById("row-3-col-2");
	if(!block2){return;}
	block2.style.width = "25%";
	var block3 = document.getElementById("row-3-col-1");
	block3.style.width = "30%";
	if(!block3){return;}
}

function stretch4(){
	var block1 = document.getElementById("row-1-col-1");
	if(!block1){return;}
	block1.style.width = "25%";
	var block2 = document.getElementById("row-1-col-2");
	if(!block2){return;}
	block2.style.width = "25%";
	var block3 = document.getElementById("row-1-col-3");
	block3.style.width = "50%";
	if(!block3){return;}
}

function normal4(){
	var block1 = document.getElementById("row-1-col-1");
	if(!block1){return;}
	block1.style.width = "3%";
	var block2 = document.getElementById("row-1-col-2");
	if(!block2){return;}
	block2.style.width = "34%";
	var block3 = document.getElementById("row-1-col-3");
	block3.style.width = "33%";
	if(!block3){return;}
}

function stretch5(){
	var block1 = document.getElementById("row-3-col-3");
	if(!block1){return;}
	block1.style.width = "20%";
	var block2 = document.getElementById("row-3-col-2");
	if(!block2){return;}
	block2.style.width = "15%";
	var block3 = document.getElementById("row-3-col-1");
	block3.style.width = "65%";
	if(!block3){return;}
}

function normal5(){
	var block1 = document.getElementById("row-3-col-3");
	if(!block1){return;}
	block1.style.width = "45%";
	var block2 = document.getElementById("row-3-col-2");
	if(!block2){return;}
	block2.style.width = "25%";
	var block3 = document.getElementById("row-3-col-1");
	block3.style.width = "30%";
	if(!block3){return;}
}