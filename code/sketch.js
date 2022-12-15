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