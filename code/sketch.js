let capture;

function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO)
  }
  
  function draw() {
    image(capture,0,0,800,600); 
    background(220);
  }