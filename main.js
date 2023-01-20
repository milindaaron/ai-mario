function preload() {
	world_start = loadSound("world_start.wav");
	mariojump=loadSound("jump.wav");
	mariocoin=loadSound("coin.wav");
	mariogameover=loadSound("game.wav");
	mariokick=loadSound("kick.wav");
	mariodies=loadSound("moariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video-size(800,400);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotPoses);
}

function draw() {
	game()
}
function modelLoaded(){
	console.log("model has loaded");
}
function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}




