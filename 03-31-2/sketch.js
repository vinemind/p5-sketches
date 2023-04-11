let angle = 0;
let speed = 0.04;

let centerX = 500;
let centerY = 500;

function setup() { 
  createCanvas(1000, 1000);
  background(196, 69, 49);
  rectMode(CENTER);
}

function draw() { 
    background(196, 69, 49, 20);

    translate(centerX, centerY);
    rotate (angle);
    // draw shape as though (centerX, centerY) is the new
    // origin / (0, 0) point
    fill(164, 183, 141, 50);
    noStroke();

    //(distance, position in relation to other shapes, size)
    rect(200, -25, 50, 200);
    rect(0, -25, 400, 50);
    rect(-200, -25, 50, 200);

    fill(247, 217, 74, 100);
    rect(200, 25, 50, 200);
    rect(0, 25, 400, 50);
    rect(-200, 25, 50, 200);

  
    angle = angle + speed;



}