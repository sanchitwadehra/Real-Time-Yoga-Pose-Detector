let video;
let poseNet;
let pose;
let skeleton;
let brain;

let state = "waiting";
let targetLabel;

function keyPressed() {
  if (key == "s") {
    brain.saveData();
  } else {
    targetLabel = key;
    console.log(targetLabel);
    setTimeout(function () {
      console.log("collecting");
      state = "collecting";
      setTimeout(function () {
        console.log("not collecting");
        state = "waiting";
      }, 10000);
    }, 10000);
  }
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

  let options = {
    inputs: 34,
    outputs: 3,
    task: "classification",
    debug: true,
  };
  brain = ml5.neuralNetwork(options);
  //brain.loadData("daw.json", dataReady);
}
/*
function dataReay() {
  brain.normalizeData();
  brain.train({ epochs: 100 }, finished);
}

function finished() {
  console.log("model trained");
  brain.save();
}
*/
function gotPoses(poses) {
  //console.log(poses);

  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;

    if (state == "collecting") {
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        //let score = pose.keyPoints[i].score;
        inputs.push(x);
        inputs.push(y);
        //inputs.push(score);
      }
      let target = [targetLabel];

      brain.addData(inputs, target);
    }
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
