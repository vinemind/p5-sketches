let shape = 0;

let fill1 = 0;
let fill2 = 0;
let fill3 = 0;
let fill4 = 0;

let o1 = 255;
let o2 = 0;
let o3 = 0;
let o4 = 0;

let transX = 0;
let transY = 0;

let fuzz = [];

function setup(){
    createCanvas(1000, 1000);
    background(0);
    frameRate(20);
    for (let i = 0; i < 5000; i++) {
        fuzz.push(new pixel());
      }
}

function draw(){
    background(0)
    
    fill(fill1, o1);
    noStroke();

    beginShape();
    vertex(250, 200);
    vertex(600, 150);
    vertex(800, 500);
    vertex(700, 800);
    vertex(300, 700);
    endShape(CLOSE);

    fill(fill2, o2);
    beginShape();
    vertex(300, 300);
    vertex(400, 350);
    vertex(600, 350);
    vertex(850, 850);
    vertex(400, 900);
    vertex(150, 800);
    endShape(CLOSE);

    fill(fill3, o3);
    beginShape();
    vertex(100, 150);
    vertex(250, 200);
    vertex(250, 300);
    vertex(600, 300);
    vertex(550, 900);
    vertex(250, 800);
    endShape();

    fill(fill4, o4);
    beginShape();
    vertex(200, 100);
    vertex(800, 150);
    vertex(700, 600);
    vertex(750, 850);
    vertex(300, 900);
    vertex(410, 600);
    endShape();

    push();
    noFill();
    stroke(0);
    strokeWeight(40);
    strokeCap(ROUND);
    beginShape();
    vertex(450+transX, 400+transY);
    vertex(500+transX, 400+transY);
    vertex(500+transX, 700+transY);
    endShape();
    line(450+transX, 700+transY, 550+transX, 700+transY);
    circle(490+transX, 300+transY, 25)
    pop();

    fill(255);
    text(shape, 50, 950)
    shape = shape + 1;
    if (shape === 0){
        fill1 = 255;
        o1 = 255;
    }
    if (shape === 10){
        fill1 = 0;
        o1 = 0;
        fill2 = 255;
        o2 = 255;
        transY = 100;
    }
    if (shape === 20){
        fill2 = 0;
        o2 = 0;
        fill3 = 255;
        o3 = 255;
        transX = -100;
        transY = 50;
    }
    if (shape === 30){
        fill3 = 0;
        o3 = 0;
        fill4 = 255;
        o4 = 255;
        transX = 70;
        transY = -20;
    }
    if (shape === 40){
        shape = 0;
        fill4 = 0;
        o4 = 0;
        fill1 = 255;
        o1 = 255;
        transX = 50;
        transY = 20;
    }
    for (let i = 0; i < fuzz.length; i++) {
        fuzz[i].move();
        fuzz[i].display();
      }


}
class pixel {
    constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(2, 10);
    this.speed = 10;
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
         fill(random(100, 255), 100)
         noStroke();
         ellipse(this.x, this.y, this.diameter, this.diameter);
    }
      }