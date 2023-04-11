let light = 0;
light >= 0;

function setup(){
    createCanvas(1000, 1000);
    background(8, 113, 40);
}

function draw(){
    background(8, 113, 40, 50);

    push();
    fill(240, 247, 118);
    noStroke();
    // light is width of the circle, light is drawn underneath shape
    circle(mouseX, mouseY, light); 

    //  checks to see if a mouse button is currently pressed
    if (mouseIsPressed === true) {
        // checks for left mouse button being pressed
        if (mouseButton === LEFT){
            light = light + 20;
        }
        // checks for center mouse button being pressed
        if (mouseButton === CENTER){
            // will not let light value go below 0
            if (light > 0){
                light = light - 20;
            }
            
        }
    }
    pop();

    noFill();
    stroke(8, 113, 40);
    strokeWeight(10);
    strokeCap(SQUARE);

    // tells shape to draw in lines instead of filling in
    beginShape(LINES);
    vertex(450, 420);
    vertex(450, 490);

    vertex(460, 500);
    vertex(470, 450);

    vertex(470, 440);
    vertex(455, 400);

    vertex(440, 380);
    vertex(480, 400);

    vertex(480, 410);
    vertex(490, 460);

    vertex(490, 470);
    vertex(460, 520);

    vertex(445, 530);
    vertex(470, 530);

    vertex(450, 570);
    vertex(490, 525);

    vertex(490, 510);
    vertex(510, 450);

    vertex(515, 500);
    vertex(490, 560);

    vertex(450, 600);
    vertex(523, 560);

    vertex(450, 620);
    vertex(530, 590);

    vertex(450, 635);
    vertex(540, 615);

    vertex(450, 650);
    vertex(545, 635);

    vertex(450, 665);
    vertex(548, 660);

    vertex(450, 680);
    vertex(550, 680);

    vertex(450, 700);
    vertex(550, 710);

    vertex(450, 715);
    vertex(550, 730);

    vertex(450, 730);
    vertex(550, 755);

    vertex(450, 745);
    vertex(540, 770);

    vertex(545, 772);
    vertex(550, 785);

    vertex(500, 775);
    vertex(550, 805);

    vertex(525, 805);
    vertex(550, 850);

    vertex(450, 760);
    vertex(515, 810);

    vertex(480, 800);
    vertex(500, 890);

    vertex(495, 810);
    vertex(520, 880);

    vertex(450, 785);
    vertex(470, 800);

    vertex(450, 800);
    vertex(480, 855);

    vertex(450, 825);
    vertex(455, 900);

    vertex(465, 850);
    vertex(470, 900);

    vertex(515, 820);
    vertex(540, 900);

    vertex(550, 860);
    vertex(550, 900);

    vertex(520, 885);
    vertex(520, 900);

    vertex(535, 470);
    vertex(520, 550);

    vertex(545, 520);
    vertex(530, 580);

    vertex(550, 570);
    vertex(550, 620);

    vertex(523, 420);
    vertex(520, 490);

    vertex(490, 400);
    vertex(510, 440);

    vertex(455, 375);
    vertex(520, 400);

    vertex(540, 410);
    vertex(550, 500);

    vertex(448, 360);
    vertex(550, 380);

    vertex(450, 345);
    vertex(550, 355);

    vertex(450, 330);
    vertex(550, 335);

    vertex(450, 315);
    vertex(540, 315);

    vertex(450, 290);
    vertex(530, 300);

    vertex(450, 260);
    vertex(515, 285);

    vertex(450, 230);
    vertex(500, 265);

    vertex(450, 160);
    vertex(490, 240);

    vertex(450, 190);
    vertex(460, 220);

    vertex(466, 130);
    vertex(480, 190);

    vertex(450, 120);
    vertex(455, 150);

    vertex(450, 100);
    vertex(450, 115);

    vertex(470, 100);
    vertex(465, 120);

    vertex(500, 100);
    vertex(480, 140);

    vertex(525, 280);
    vertex(550, 290);

    vertex(500, 245);
    vertex(550, 270);

    vertex(490, 200);
    vertex(520, 240);

    vertex(520, 170);
    vertex(540, 250);

    vertex(490, 150);
    vertex(515, 210);

    vertex(520, 100);
    vertex(495, 140);

    vertex(540, 100);
    vertex(510, 170);

    vertex(552, 100);
    vertex(540, 180);

    vertex(550, 190);
    vertex(550, 240);

    endShape();



}