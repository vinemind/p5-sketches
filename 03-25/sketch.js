function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(0);
}
function draw(){
    background(0);
    fill(173, 210, 069);
    noStroke();
    box(mouseX/3, 500, mouseX/3);
    
    translate(0, -250, 0);
    box(300, mouseY/3, mouseY/3);

    translate(0, 500, 0);
    box(300, mouseY/3, mouseY/3);
}