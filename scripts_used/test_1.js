// Load the required libraries
const fs = require('fs');
const path = require('path');
const ml5 = require('ml5');

// Set the root directory containing the subdirectories
const rootDirectory = 'C:\\Users\\WADEHRA\\Documents\\GitHub\\DT-Project\\dataset';

// Set the directory where the JSON file should be saved
const jsonDirectory = 'C:\\Users\\WADEHRA\\Downloads';

// Initialize a new PoseNet model
const model = ml5.poseNet();

// Initialize an empty array to store the keypoints
const keypoints = [];

// Get a list of all the subdirectories in the root directory
const subdirectories = fs.readdirSync(rootDirectory).filter(d => fs.statSync(path.join(rootDirectory, d)).isDirectory());

// Iterate over the list of subdirectories
subdirectories.forEach(directory => {
  // Get a list of all the image files in the subdirectory
  const files = fs.readdirSync(path.join(rootDirectory, directory)).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

  // Iterate over the list of files
  files.forEach(file => {
    // Load the image file
    const img = new Image();
    img.src = path.join(rootDirectory, directory, file);

    // Estimate the pose of the person in the image
    model.estimateSinglePose(img, (err, pose) => {
      if (err) {
        console.error(err);
      } else {
        // Add the keypoints to the array
        keypoints.push(pose.keypoints);
      }
    });
  });
});

// Serialize the array of keypoints as JSON
const jsonData = JSON.stringify(keypoints);

// Set the name and path of the JSON file
const jsonFile = path.join(jsonDirectory, 'keypoints.json');