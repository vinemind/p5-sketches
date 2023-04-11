let cam;

//let angle = 0;
//let speed = 0.04;

//let centerX = 0;
//let centerY = 0;

function setup(){
    createCanvas(1000, 1000, WEBGL);
    cam = createCamera();
    background(189, 236, 253)
}

function draw(){
    //background(189, 236, 253);
    cam.move(0, 0, (0.03 - sin(frameCount * 0.03)));

    push();
    noStroke();
    fill(189, 236, 253, 30);
    rotateZ((frameCount * 0.005));
    box(50, 400, (2 - (frameCount * 0.03)))
    translate(0, 200, 0)
    box(200, 50, (2 - (frameCount * 0.03)))
    translate(0, -400, 0)
    box(200, 50, (2 - (frameCount * 0.03)))
    pop();

    fill(55, 91, 202, 10);
    //noFill();
    noStroke();
    rotateZ(frameCount * 0.01)
    box(80, 400, (0.5 - (frameCount * 0.05)))
    translate(0, 200, 0)
    //box(200, 50, (0.03 - (frameCount * 0.03)))
    translate(0, -400, 0)
    //box(200, 50, (0.03 - (frameCount * 0.03)))


    //fill(55, 91, 202, 10);
    //box(30, 370, 10)


    //angle + angle = speed;
}