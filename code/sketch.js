let capture;
let posenet;
let pose;
let poses;

function setup(){
    createCanvas(800,600);
    capture = createCapture(VIDEO);
    capture.hide();
    posenet=ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses);
}

function receivedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        pose=poses[0].pose;
    }
}

function modelLoaded(){
    console.log('Model has loaded');
}

function draw(){
    image(capture,0,0,800,600);
    //background(200);
    if(pose){
        FileList(255,0,0);
    ellipse(pose.nose.x,pose.nose.y,64);

    }
    
}


/*
let video;
let poseNet;
let pose;

function setup() {
    createCanvas(1920, 1080);
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video.modelLoaded);
    poseNet.on('pose',gotPoses);
  }
  
function gotPoses(poses) {
    console.log(poses);
    if(poses.length > 0){
        pose=poses[0].pose;
    }
}

 function modelLoaded() {
    console.log('poseNet ready');
 }

  function draw() {
    image(video,0,0); 

    if(pose){
        FileList(255,0,0);
    elllipse(pose.nose.x,pose.nose.y,64);
    }
    
  }
  */