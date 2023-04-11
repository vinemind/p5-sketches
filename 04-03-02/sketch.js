let i1r = 0;
let i1g = 0;
let i1b = 0;

let i2r = 0;
let i2g = 0;
let i2b = 0;

let i3r = 0;
let i3g = 0;
let i3b = 0;

let i4r = 0;
let i4g = 0;
let i4b = 0;

let i5r = 0;
let i5g = 0;
let i5b = 0;

let i6r = 0;
let i6g = 0;
let i6b = 0;

let i7r = 0;
let i7g = 0;
let i7b = 0;

let i8r = 0;
let i8g = 0;
let i8b = 0;

let i9r = 0;
let i9g = 0;
let i9b = 0;

let click = 0;

function setup(){
    createCanvas(1000, 1000);
    background(0);
    rectMode(CENTER);
}

function draw(){
    noStroke();
    fill(i2r, i2g, i2b);
    square(200, 200, 200);
    fill(i5r, i5g, i5b);
    square(500, 200, 200);
    fill(i3r, i3g, i3b);
    square(800, 200, 200);
    fill(i7r, i7g, i7b);
    square(200, 500, 200);
    fill(i9r, i9g, i9b);
    square(500, 500, 200);
    fill(i8r, i8g, i8b);
    square(800, 500, 200);
    fill(i1r, i1g, i1b);
    square(200, 800, 200);
    fill(i4r, i4g, i4b);
    square(500, 800, 200);
    fill(i6r, i6g, i6b);
    square(800, 800, 200);

    fill (0);
    rect(50, 200, 250, 100)
    rect(350, 200, 250, 100)
    rect(650, 200, 250, 100)
    rect(950, 200, 250, 100)
    rect(50, 500, 250, 100)
    rect(350, 500, 250, 100)
    rect(650, 500, 250, 100)
    rect(950, 500, 250, 100)
    rect(50, 800, 250, 100)
    rect(350, 800, 250, 100)
    rect(650, 800, 250, 100)
    rect(950, 800, 250, 100)



    if (click === 0){

    }
    if (click === 1){
        i1r = 189;
        i1g = 231;
        i1b = 189;
    }
    if (click === 2){
        i2r = 177;
        i2g = 139;
        i2b = 228;
        i1r = 0;
        i1g = 0;
        i1b = 0;
    }
    if (click === 3){
        i3r = 243;
        i3g = 168;
        i3b = 63;
        i2r = 0
        i2g = 0
        i2b = 0
    }
    if (click === 4){
        i4r = 108;
        i4g = 124;
        i4b = 231;
        i3r = 0
        i3g = 0
        i3b = 0
    }
    if (click === 5){
        i5r = 252;
        i5g = 138;
        i5b = 151;
        i4r = 0
        i4g = 0
        i4b = 0
    }
    if (click === 6){
        i6r = 240;
        i6g = 200;
        i6b = 0;
        i5r = 0
        i5g = 0
        i5b = 0
    }
    if (click === 7){
        i7r = 138;
        i7g = 126;
        i7b = 081;
        i6r = 0
        i6g = 0
        i6b = 0
    }
    if (click === 8){
        i8r = 32;
        i8g = 182;
        i8b = 121;
        i7r = 0
        i7g = 0
        i7b = 0
    }
    if (click === 9){
        i9r = 255;
        i9g = 255;
        i9b = 255;
        i8r = 0
        i8g = 0
        i8b = 0
    }
    if (click === 10){
        click = 0;
        i9r = 0;
        i9g = 0;
        i9b = 0;
    }
}

function mousePressed(){
    if (mousePressed){
        click = click + 1;
    }
}