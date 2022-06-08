leftEyeX=0;
leftEyeY=0;
rightEyeX=0;
rightEyeY=0;
noseX=0;
noseY=0;

function preload(){
  
mask= loadImage("https://i.postimg.cc/G2RTh9dV/Mask-1.png");
glasses=loadImage("https://i.postimg.cc/nhFC5Mnh/6c69c34719076512e4c414ca5c1cd478.png");
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('model is loaded');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftEyeX=results[0].pose.leftEye.x;
leftEyeY=results[0].pose.leftEye.y;
rightEyeX=results[0].pose.rightEye.x;
rightEyeY=results[0].pose.rightEye.y;
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
}
}

function draw(){
image(video,0,0,300,300);
image(mask,noseX-227,noseY-125,100,80);
image(glasses,leftEyeX-250,leftEyeY-100,70,30);

}

function take_snapshot(){
save("myFilterImage.jpg");
}