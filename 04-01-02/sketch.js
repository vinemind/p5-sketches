let vanishX = 500;
let vanishY= 500;

function setup(){
    createCanvas(1000, 1000);
    background(255);
}

function draw(){
    background(255);
    
    noFill();
    stroke(0);
    strokeWeight(1);

    beginShape();
    vertex(mouseX+150, mouseY-300);
    vertex(mouseX+150, mouseY-200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX-150, mouseY-300);
    vertex(mouseX-150, mouseY-200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);
    
    beginShape();
    vertex(mouseX-150, mouseY-300);
    vertex(mouseX+150, mouseY-300)
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX-150, mouseY-200);
    vertex(mouseX-50, mouseY-200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX+150, mouseY-200);
    vertex(mouseX+50, mouseY-200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX-50, mouseY+200);
    vertex(mouseX-50, mouseY-200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX+50, mouseY+200);
    vertex(mouseX+50, mouseY-200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX-50, mouseY+200);
    vertex(mouseX-150, mouseY+200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX+50, mouseY+200);
    vertex(mouseX+150, mouseY+200);
    vertex(vanishX, vanishY);
    endShape(CLOSE);


    beginShape();
    vertex(mouseX-150, mouseY+200);
    vertex(mouseX-150, mouseY+300);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX+150, mouseY+200);
    vertex(mouseX+150, mouseY+300);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    beginShape();
    vertex(mouseX-150, mouseY+300);
    vertex(mouseX+150, mouseY+300);
    vertex(vanishX, vanishY);
    endShape(CLOSE);

    fill(255);
    strokeWeight(3);
    translate(mouseX-150, mouseY-300)
    beginShape();
    vertex(0, 0);
    vertex(300, 0);
    vertex(300, 100);
    vertex(200, 100);
    vertex(200, 500);
    vertex(300, 500);
    vertex(300, 600);
    vertex(0, 600);
    vertex(0, 500);
    vertex(100, 500);
    vertex(100, 100);
    vertex(0, 100);
    endShape(CLOSE);


}

function keyPressed(){

    if (keyIsDown(UP_ARROW)){
        vanishY = vanishY - 5;
    }

    if (keyIsDown(DOWN_ARROW)){
        vanishY = vanishY + 5;
    }

     if (keyIsDown(LEFT_ARROW)){
        vanishX = vanishX - 5;
    }

    if (keyIsDown(RIGHT_ARROW)){
        vanishX = vanishX + 5;
    }

}