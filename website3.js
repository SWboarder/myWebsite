$(document).ready(function() {
	//alert("Links are not red yet.");
	//var heightOrigOut = $("#education").css("height");
	

	var widthEducation = $("#education").css("width");
	var widthLearn = $("#learn").css("width");
	var widthEducationNew = widthEducation*2;

	var marginInner = $("#educationIcon").css("margin-top");
	
	$("#education").mouseenter(function() {
	    $("#education").css("width", widthEducationNew);
	    $("#learn").css("width", "0px");
	    $("#educationIcon").css("margin-top", marginInner);
	);

	$("#education").mouseleave(function() {
	    $("#education").css("width", widthEducation);
	    $("#learn").css("width", widthLearn);
	    $("#educationIcon").css("margin-top", marginInner);
	);

	//var heightOrigIn = $("#educationIcon").css("height");
	//var widthOrigIn = $("#educationIcon").css("width");	
});

