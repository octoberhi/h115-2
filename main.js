noseX=0;
noseY=0;
function preload(){
mustache = loadImage('https://i.postimg.cc/xTx41CCz/m.png');
}

function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if (results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x-25;
noseY = results[0].pose.nose.y+10;
}
}

function draw(){
    image(video,0,0,500,500);
    image(mustache,noseX,noseY,50,20);
}

function take_snapshot(){
save("Image.png");
}