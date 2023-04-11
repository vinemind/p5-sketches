let pupilX = 0.0;
let pupilY = 0.0;

function setup(){
    createCanvas(1000, 1000);
    background(0);
    rectMode(CENTER);
}

function draw(){
    background(0, 0, 0, 70);

    //let pupil = pupil + 0.01
    //let pupilX = noise(pupil+5) * width;
    pupilX = pupilX + 0.05;
    pupilY = pupilY + 0.05;
    let px = noise(pupilX + 0.5) * (width*0.1);
    let py = noise(pupilY - 0.5) * (height*0.1)

    noFill();
    stroke(255);
    strokeWeight(5);

    circle(450+px, 380+py, 300)

    fill(255);
    noStroke();
    rect(450+px, 310+py, 30, 30);
    rect(450+px, 400+py, 30, 100)

    noFill();
    stroke(255);
    push();
    noStroke();
    fill(0);
    beginShape();
    curveVertex(140, 500);
    curveVertex(140, 500);
    curveVertex(180, 470);
    curveVertex(350, 350);
    curveVertex(500, 330);
    curveVertex(700, 350);
    curveVertex(810, 410);
    curveVertex(800, 100);
    curveVertex(200, 100);
    curveVertex(140, 500);
    curveVertex(140, 500);
    curveVertex();
    endShape();
    pop();

    beginShape();
    curveVertex(140, 500);
    curveVertex(140, 500);
    curveVertex(180, 470);
    curveVertex(350, 350);
    curveVertex(500, 330);
    curveVertex(700, 350);
    curveVertex(810, 410);
    curveVertex(810, 410);
    endShape();

    beginShape();
    curveVertex(600, 410);
    curveVertex(790, 400);
    curveVertex(680, 580);
    curveVertex(470, 640);
    curveVertex(250, 540);
    curveVertex(180, 520);
    curveVertex(180, 560);
    endShape();

    beginShape();
    curveVertex(100, 700);
    curveVertex(150, 400);
    curveVertex(450, 200);
    curveVertex(860, 350);
    curveVertex(800, 800);
    endShape();

    beginShape();
    curveVertex(150, 600);
    curveVertex(150, 600);
    curveVertex(360, 750);
    curveVertex(650, 780);
    curveVertex(650, 700);
    curveVertex();
    curveVertex();
    curveVertex();
    curveVertex();
    endShape();
}