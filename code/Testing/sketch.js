let poseNet;

async function setup() {
  // Create a new PoseNet model
  poseNet = await ml5.poseNet();

  // Get the image element
  const image = document.getElementById('my-image');

  // Estimate the pose of the person in the image
  const pose = await poseNet.singlePose(image);
  console.log(pose);
}

setup();
