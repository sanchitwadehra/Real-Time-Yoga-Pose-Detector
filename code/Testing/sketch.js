// Add an event listener to the file input element
const input = document.getElementById('file-input');
input.addEventListener('change', e => {
  // Read the selected file as a data URL
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    // Create an Image object and pass it to the estimateSinglePose method
    const img = new Image();
    img.src = reader.result;
    model.estimateSinglePose(img, (err, pose) => {
      if (err) {
        console.error(err);
      } else {
        console.log(pose);
      }
    });
  };
  reader.readAsDataURL(file);
});
