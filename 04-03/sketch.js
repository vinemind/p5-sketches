let x = 0;
let y = 0;

let click = 0;

function setup(){
    createCanvas(1000, 1000);
    background(0);
    rectMode(CENTER);
}

function draw(){
    //background(0, 1);
    fill(255, 10);
    noStroke();
    translate(x, y);
    beginShape();
    vertex(-150, -400);
    vertex(-150, -350);
    vertex(-100, -350);
    vertex(-100, -50);
    vertex(-150, -50);
    vertex(-150, 0);
    vertex(0, 0);
    vertex(0, -50);
    vertex(-50, -50);
    vertex(-50, -350);
    vertex(0, -350);
    vertex(0, -400);
    endShape(CLOSE);

    if (click === 0){
        x = x+15;
        if (x > 1200){
            x = -20
        }
        y = y+5;
        if (y > 1200){
            y = -20;
        }
    }

    if (click === 1){
        x = x + 5;
        if (x > 1200){
            x = -20;
        }
        y = y+(random(-30, 30));
        if (y < -400){
            y = 1500;
        }
        if (y > 1600){
            y = -300;
        }
    }

    if (click === 2){
        y = y + 25;
        if (y > 1500){
            y = -300;
            x = x - 75;
        }
        if (x < -200){
            x = 1200;
        }
    }

    if (click === 4){
        click = 0;
    }
}

function mousePressed(){
    if (mousePressed){
        click = click + 1;
    }
}