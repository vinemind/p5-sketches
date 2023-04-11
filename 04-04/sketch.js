let cam;

function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(0);
    cam = createCamera();
    cam.tilt(0);
}

function draw(){
    background(0)
    noFill();
    stroke(255);
    box(100, 400, 200)
    translate(0, 250, 0);
    box(400, 75, 400)
    translate(0, -500, 0);
    box(400, 75, 400)

    cam.tilt(mouseY * 0.005);
}