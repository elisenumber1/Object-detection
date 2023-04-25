status="";

function preload(){
	img = loadImage("hat.JPG");
}

function setup(){
	canvas = createCanvas(380, 380);
	canvas.center();
	document.getElementById("status").innerHTML="Status:Detecting objects";
}

function modelloaded(){
	console.log("Model has been loaded.");
	status=true;
	objectDetector.detect(video, gotResult);
}

function gotResults(){
	if(error){
		console.log(error);
	}
	else{
		console.log(results);
		objects=results;
	}
}