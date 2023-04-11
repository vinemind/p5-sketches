let flame=250;
let flameOP=255;

function setup(){
    createCanvas(1000, 1000)
    background(73, 30, 76)
}

function draw(){
    background(73, 30, 76)

    stroke(193, 209, 247);
    strokeWeight(15);
    fill(215, 222, 252);
    beginShape()
    vertex(400, 300);
    vertex(430, 290);
    vertex(450, 295);
    vertex(470, 310);
    vertex(500, 315);
    vertex(520, 310);
    vertex(550, 305);
    vertex(570, 320);
    vertex(580, 330);
    vertex(590, 350);
    vertex(600, 500);
    vertex(590, 520);
    vertex(580, 518);
    vertex(580, 850);
    vertex(420, 850);
    vertex(420, 600);
    vertex(410, 610);
    vertex(400, 605);
    vertex(390, 595);
    vertex(393, 575);
    vertex(395, 560);
    vertex(396, 555);
    vertex(400, 500);
    vertex(405, 400);
    vertex(395, 320);
    vertex(400, 300);
    endShape();

    noStroke();
    fill(214, 68, 20, flameOP);
    circle(500, flame, 30)
    flame=flame-5
    if(flame < 0){
        flame=250;
    }
    flameOP = flame;
    fill(214, 68, 20);
    circle(500, 250, 50)
}