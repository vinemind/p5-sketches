let chonk = 0.0;

function setup(){
    createCanvas(1000, 1000);
    background(0);
}

function draw(){

    background (0, 0, 0, 50);

    push();

    chonk = chonk + 0.01;
    let m = noise(chonk+20) * (width*0.4);
    let n = noise(chonk+15) * (width*0.7);
    let o = noise(chonk+30) * (width*0.6);
    let p = noise(chonk+100) * (width*1.5);
    let q = noise(chonk+200) * (width*0.6);
    let r = noise(chonk+300) * (width*0.9);
    let s = noise(chonk+400) * (width*2);
    let t = noise(chonk+1000) * (width*0.8);

    fill(0, 255, 255, 70);
    noStroke();
    circle(600, 600, q);
    circle(200, 200, n);
    circle(300, 450, m);
    circle(150, 750, p);
    circle(590, 420, o);
    fill(255, 255, 0, 70);
    circle(681, 284, p);
    circle(470, 550, q);
    circle(610, 720, r);
    circle(347, 620, s);
    circle(180, 800, n);
    fill(255, 0, 255, 70);
    circle(470, 180, o);
    circle(180, 500, n);
    circle(550, 600, t);
    circle(400, 700, r);
    circle(700, 750, s);
    pop();

    push();
    fill (255);
    noStroke();
    rect(0, 0, 1000, 200);
    rect(0, 800, 1000, 200);
    rect(0, 0, 250, 1000);
    rect(750, 0, 250, 1000);
    rect(0, 350, 400, 300);
    rect(600, 350, 400, 300);
    pop();
}