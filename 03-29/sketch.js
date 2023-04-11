let radius = 150;
let angle = 0;
let speed = 0.02;

let centerX = 500;
let centerY = 500;

let bloat1;
let bloat2;
let bloat3;
let bloat4;

function setup() { 
  createCanvas(1000, 1000);
  background(0);
  ellipseMode(CORNER);
}

function draw() { 
    background(0);

    push();
    translate(centerX, centerY);
    rotate (angle);
    // draw shape as though (centerX, centerY) is the new
    // origin / (0, 0) point
    fill(255);
    noStroke();

    //(distance, position in relation to other shapes, size)
    circle(radius, 100, bloat1);
    circle(radius-80, 100, bloat4);
    circle(radius-130, 500, bloat2);
    circle(radius+70, 200, bloat3);
    circle(radius+150, 80, bloat1);
    circle(radius-200, 30, bloat2);
    circle(radius, 1275, bloat3);
  
    angle = angle + speed;

    bloat1 = ((mouseX/2)+(mouseY/2));
    bloat2 = ((mouseX/2)-(mouseY/2));
    bloat3 = ((mouseY/2)+(mouseX/2));
    bloat4 = ((mouseY/2)-(mouseX/2));
    pop();

    fill(0);
    noStroke();
    rect(800, 700, 50, 50);
    rect(800, 800, 50, 200);

}
