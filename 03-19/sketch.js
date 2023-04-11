function setup(){
    createCanvas(800, 800);
    background(0);
}

function draw(){
    background(0);

    stroke(179,205,204);
    strokeWeight(7);
    line(mouseX-100, mouseY-250, mouseX+100, mouseY-250);
    line(mouseX-100, mouseY+250, mouseX+100, mouseY+250);

    noStroke();
    fill(179, 205, 204);
    rect(mouseX-20, 150, 30, 500);
  
}