Music1="";
Music2="";

function preload()
{
	Music1=loadSound("music.mp3");
    Music2=loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function draw() {
	image(video, 0, 0, 600, 500);
}