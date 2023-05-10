status="";
objects=[];

function preload(){
	img = loadImage("heater.JPG");
}

function setup(){
	canvas = createCanvas(380, 380);
	canvas.center();
	document.getElementById("status").innerHTML="Status:Detecting objects";
	objectDetector=ml5.objectDetector('cocossd',modelloaded);
}

function draw(){
	image(img, 0, 0, 380, 380);
	if(status!=""){
		objectDetector.detect(img, gotresult);
		for(i=0;i<objects.length;i++){
			document.getElementById("status").innerHTML="status:objects detected";
			document.getElementById("number_of_objects").innerHTML="number of objects detected are: "+objects.length;
			fill("#FF0000");
			percent=floor(objects[i].confidence*100);
			text(objects[i].label+" " +percent+"%",objects[i].x+15,objects[i].y+15);
			noFill();
			stroke("#FF0000");
			rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
		}
	}
}

function modelloaded(){
	console.log("Model has been loaded.");
	status=true;
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