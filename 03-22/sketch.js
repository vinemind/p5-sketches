let value = 0

function setup(){
    createCanvas(800, 800);
    background(0);
}

function draw(){
    fill(value);
    noStroke();
    rect(200, 200, 49, 49);
    rect(250, 200, 49, 49);
    rect(300, 200, 49, 49);
    rect(350, 200, 49, 49);
    rect(400, 200, 49, 49);
    rect(450, 200, 49, 49);
    rect(500, 200, 49, 49);
    rect(550, 200, 49, 49);
    rect(350, 250, 49, 49);
    rect(400, 250, 49, 49);
    rect(350, 300, 49, 49);
    rect(400, 300, 49, 49);
    rect(350, 350, 49, 49);
    rect(400, 350, 49, 49);
    rect(350, 400, 49, 49);
    rect(400, 400, 49, 49);
    rect(350, 450, 49, 49);
    rect(400, 450, 49, 49);
    rect(350, 500, 49, 49);
    rect(400, 500, 49, 49);
    rect(200, 550, 49, 49);
    rect(250, 550, 49, 49);
    rect(300, 550, 49, 49);
    rect(350, 550, 49, 49);
    rect(400, 550, 49, 49);
    rect(450, 550, 49, 49);
    rect(500, 550, 49, 49);
    rect(550, 550, 49, 49);
}

function keyTyped(){
    if (key === 'i'){
        value = 255;
    }
    else if (key != 'i'){
        value = 0;
    }
}