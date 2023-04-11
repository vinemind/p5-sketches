let x1 = 0;
let y1 = 0;
let z1 = 0;

let x2 = 0;
let y2 = 0;
let z2 = 0;

let click = 0;

function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(23, 9, 66);
}

function draw(){
    push();
    tint(255, 150);
    background(23, 9, 66);
    pop();

    fill(247, 187, 123, 150);
    stroke(255);
    push();
    rotateY(y1 * 0.005);
    rotateZ(z1 * 0.008);
    translate(x1, -200+y1)
    box(100, 100, 100);
    pop();

    fill(72, 187, 226, 100);
    translate(0, 150);
    rotateY(frameCount * 0.01);
    box(100, 400, 100)

    if (click === 0){
        x1 = x1 + 20;
        if (x1 > 1200){
            x1 = -1000;
        }
        y1 = y1 + 20;
        if (y1 > 1200){
            y1 = -1000;
        }
    }

    z1 = z1 + 2
}

function mousePressed(){
    if (mousePressed){
        click = click + 1;
    }
}