function setup(){
    createCanvas(800, 800);
    background(0);
    rectColour = random(255, 255, 255);
}

function draw(){

    noStroke();
    fill(rectColour);
    rect(380, 200, 40, 400);
    rect(200, 120, 80, 50);
    rect(300, 100, 40, 30);
    rect(500, 140, 90, 10);
    rect(450, 160, 60, 35);
    rect(300, 140, 150, 5);
    rect(400, 120, 100, 15);
    rect(480, 650, 100, 12);
    rect(210, 600, 120, 5);
    rect(230, 630, 300, 10);
   
}

function mouseClicked(){
    if(mouseClicked)
    background(random (255));
    rectColour = color(random (255), random (255), random(255));
}