let pos = random(1000);

function setup(){
    createCanvas(1000, 1000);
    background(0);
    rectMode(CENTER);
}

function draw(){
    fill(random(218, 251), random(142, 209), random(172, 200), 150);
    noStroke();

    textSize(random(100, 300));
    text('i', random(1000), random(1000))
}
