let video;
let poseNet;
let pose;
let skeleton;

function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function gotPoses(poses) {
  console.log(poses);

  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log("poseNet ready");
}

function draw() {
  image(video, 0, 0);
  //background(200);

  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);

  if (pose) {
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    fill(0, 0, 0);
    ellipse(pose.nose.x, pose.nose.y, d / 2);
    fill(0, 0, 0);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 16);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 16);

    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0, 0, 0);
      ellipse(x, y, 16, 16);
    }
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(0);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
  }
}
