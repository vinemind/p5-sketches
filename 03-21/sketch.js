function setup(){
    createCanvas(800, 800);
    background(124, 56, 132);
    stem = (random (10, 790));
}

function draw(){
    background(124, 56, 132);

    fill(104, 215, 175);
    noStroke();
    ellipse(mouseX+random(15), mouseY+random(15), 80, 80);

    fill(243, 138, 126)
    noStroke()
    rect(stem, 450, 30, 300)
}

function mouseClicked(){
    if(mouseClicked)
    stem = random(10, 790);
}