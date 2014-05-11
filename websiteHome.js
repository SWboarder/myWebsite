window.addEventListener("load", addHandlers, false);

function addHandlers(){
/*
	var educationText = "education";
	var learnText = "learn";
	var educationIconText = "educationIcon";
	var educationIconInnerText = "Education";
*/

	var learn = document.getElementById("learn");
	var education = document.getElementById("education");
	var about = document.getElementById("about");
	var palmtree = document.getElementById("palmtree");
	var work = document.getElementById("work");
	var bear = document.getElementById("bear");
	var nameFirst = document.getElementById("nameFirst");
	var nameLast = document.getElementById("nameLast");
	var me = document.getElementById("me");
	var life = document.getElementById("life");
	var quals = document.getElementById("quals");
	var board = document.getElementById("board");
	var awards = document.getElementById("awards");
	var contact = document.getElementById("contact");
	var explore = document.getElementById("explore");

	var educationIcon = document.getElementById("educationIcon");
	var aboutIcon = document.getElementById("aboutIcon");
	var workIcon = document.getElementById("workIcon");
	var nameFirstIcon = document.getElementById("nameFirstIcon");
	var nameLastIcon = document.getElementById("nameLastIcon");
	var qualsIcon = document.getElementById("qualsIcon");
	var awardsIcon = document.getElementById("awardsIcon");
	var contactIcon = document.getElementById("contactIcon");
	
	var width = window.innerWidth;
	var height= window.innerHeight;
	var rowHeight = Math.floor(height/9);
	var rowHeightTablet = Math.floor(height*0.84/18);
	
	if(width>640){
		nameFirstIcon.innerHTML = width;
		nameLastIcon.innerHTML = height;

		educationIcon.style.marginTop = String(rowHeight)+"px";
		aboutIcon.style.marginTop = String(rowHeight)+"px";
		workIcon.style.marginTop = String(rowHeight)+"px";
		nameFirstIcon.style.marginTop = String(rowHeight)+"px";
		nameLastIcon.style.marginTop = String(rowHeight)+"px";
		qualsIcon.style.marginTop = String(rowHeight)+"px";
		awardsIcon.style.marginTop = String(rowHeight)+"px";
		contactIcon.style.marginTop = String(rowHeight)+"px";
	}
	else{
		rowHeightTablet = Math.floor(height*0.84/18);
		educationIcon.style.marginTop = String(rowHeightTablet)+"px";
		aboutIcon.style.marginTop = String(rowHeightTablet)+"px";
		workIcon.style.marginTop = String(rowHeightTablet)+"px";
		nameFirstIcon.style.marginTop = String(rowHeightTablet)+"px";
		nameLastIcon.style.marginTop = String(rowHeightTablet)+"px";
		qualsIcon.style.marginTop = String(rowHeightTablet)+"px";
		awardsIcon.style.marginTop = String(rowHeightTablet)+"px";
		contactIcon.style.marginTop = String(rowHeightTablet)+"px";
	}

	window.onresize = getNewScreenSize;
	
	//education.onmouseover = expandEducationBlock(educationText, learnText, educationIconText, educationIconInnerText);
	education.onmouseover = expandEducationBlock;
	education.onmouseout = shrinkEducationBlock;
	about.onmouseover = expandAboutBlock;
	about.onmouseout = shrinkAboutBlock;
	work.onmouseover = expandWorkBlock;
	work.onmouseout = shrinkWorkBlock;
	quals.onmouseover = expandQualsBlock;
	quals.onmouseout = shrinkQualsBlock;
	awards.onmouseover = expandAwardsBlock;
	awards.onmouseout = shrinkAwardsBlock;
	contact.onmouseover = expandContactBlock;
	contact.onmouseout = shrinkContactBlock;

	education.onmousedown = pickedEducation;
	education.onmouseup = goToEducation;
}

function getNewScreenSize(){
	width = window.innerWidth;
	height = window.innerHeight;

	nameFirstIcon.innerHTML = width;
	nameLastIcon.innerHTML = height;

	if(width>640){
		rowHeight = Math.floor(height/9);

		learn.style.width = "20%";
		education.style.width = "20%";
		about.style.width = "20%";
		palmtree.style.width = "20%";
		work.style.width = "20%";
		bear.style.width = "20%";
		nameFirst.style.width = "20%";
		nameLast.style.width = "20%";
		me.style.width = "20%";
		life.style.width = "20%";
		quals.style.width = "20%";
		board.style.width = "20%";
		awards.style.width = "20%";
		contact.style.width = "20%";
		explore.style.width = "20%"

		educationIcon.style.marginTop = String(rowHeight)+"px";
		aboutIcon.style.marginTop = String(rowHeight)+"px";
		workIcon.style.marginTop = String(rowHeight)+"px";
		nameFirstIcon.style.marginTop = String(rowHeight)+"px";
		nameLastIcon.style.marginTop = String(rowHeight)+"px";
		qualsIcon.style.marginTop = String(rowHeight)+"px";
		awardsIcon.style.marginTop = String(rowHeight)+"px";
		contactIcon.style.marginTop = String(rowHeight)+"px";
	}
	else{
		learn.style.width = "100%";
		education.style.width = "100%";
		about.style.width = "100%";
		palmtree.style.width = "100%";
		work.style.width = "100%";
		bear.style.width = "100%";
		nameFirst.style.width = "100%";
		nameLast.style.width = "100%";
		me.style.width = "100%";
		life.style.width = "100%";
		quals.style.width = "100%";
		board.style.width = "100%";
		awards.style.width = "100%";
		contact.style.width = "100%";
		explore.style.width = "100%";

		rowHeightTablet = Math.floor(height*0.84/18);
		educationIcon.style.marginTop = String(rowHeightTablet)+"px";
		aboutIcon.style.marginTop = String(rowHeightTablet)+"px";
		workIcon.style.marginTop = String(rowHeightTablet)+"px";
		nameFirstIcon.style.marginTop = String(rowHeightTablet)+"px";
		nameLastIcon.style.marginTop = String(rowHeightTablet)+"px";
		qualsIcon.style.marginTop = String(rowHeightTablet)+"px";
		awardsIcon.style.marginTop = String(rowHeightTablet)+"px";
		contactIcon.style.marginTop = String(rowHeightTablet)+"px";
	}
}


function expandEducationBlock(){
	width = window.innerWidth;
	if(width>640){
		education.style.width = "40%";
		learn.style.width = "0%";
		educationIcon.innerHTML = "Education";
	}
	else{
		return;
	}
}

function shrinkEducationBlock(){
	width = window.innerWidth;
	if(width>640){
	education.style.width = "20%";
	learn.style.width = "20%";
	educationIcon.innerHTML = "";
	}
	else{
		return;
	}
}

function expandAboutBlock(){
	width = window.innerWidth;
	if(width>640){
		about.style.width = "40%";
		palmtree.style.width = "0%";
		aboutIcon.innerHTML = "About";
	}
	else{
		return;
	}
}

function shrinkAboutBlock(){
	width = window.innerWidth;
	if(width>640){
	about.style.width = "20%";
	palmtree.style.width = "20%";
	aboutIcon.innerHTML = "";
	}
	else{
		return;
	}
}

function expandWorkBlock(){
	width = window.innerWidth;
	if(width>640){
		work.style.width = "40%";
		palmtree.style.width = "0%";
		workIcon.innerHTML = "Work";
	}
	else{
		return;
	}
}

function shrinkWorkBlock(){
	width = window.innerWidth;
	if(width>640){
	work.style.width = "20%";
	palmtree.style.width = "20%";
	workIcon.innerHTML = "";
	}
	else{
		return;
	}
}

function expandQualsBlock(){
	width = window.innerWidth;
	if(width>640){
		quals.style.width = "40%";
		board.style.width = "0%";
		qualsIcon.innerHTML = "Qualifications";
	}
	else{
		return;
	}
}

function shrinkQualsBlock(){
	width = window.innerWidth;
	if(width>640){
	quals.style.width = "20%";
	board.style.width = "20%";
	qualsIcon.innerHTML = "";
	}
	else{
		return;
	}
}

function expandAwardsBlock(){
	width = window.innerWidth;
	if(width>640){
		awards.style.width = "40%";
		board.style.width = "0%";
		awardsIcon.innerHTML = "Awards";
	}
	else{
		return;
	}
}

function shrinkAwardsBlock(){
	width = window.innerWidth;
	if(width>640){
	awards.style.width = "20%";
	board.style.width = "20%";
	awardsIcon.innerHTML = "";
	}
	else{
		return;
	}
}

function expandContactBlock(){
	width = window.innerWidth;
	if(width>640){
		contact.style.width = "40%";
		explore.style.width = "0%";
		contactIcon.innerHTML = "Contact";
	}
	else{
		return;
	}
}

function shrinkContactBlock(){
	width = window.innerWidth;
	if(width>640){
	contact.style.width = "20%";
	explore.style.width = "20%";
	contactIcon.innerHTML = "";
	}
	else{
		return;
	}
}

function pickedEducation(){
	education.style.backgroundColor = "#8762b3";
}

function goToEducation(){
	education.style.backgroundColor = "#a97be0";
	window.location = "./education.html";
}







