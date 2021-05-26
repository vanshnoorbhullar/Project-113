function preload(){
}

function setup(){
    canvas = createCanvas(640 , 460);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 60 , 60 , 520 , 360);

    fill(127,255,212);
    stroke(123,104,238);
    rect(40, 20, 20, 450);

    fill(127,255,212);
    stroke(123,104,238);
    rect(580, 20, 20, 450);
  
    fill(123,104,238);
    stroke(123,104,238);
    circle(50, 230, 80);

    fill(123,104,238);
    stroke(123,104,238);
    circle(590, 230, 80);

    fill(123,104,238);
    stroke(123,104,238);
    circle(50, 50, 80);

    fill(127,255,212);
    stroke(123,104,238);
    rect(90, 40, 460, 20);

    fill(123,104,238);
    stroke(123,104,238);
    circle(320, 50, 80);

    fill(123,104,238);
    stroke(123,104,238);
    circle(590, 50, 80);

    fill(123,104,238);
    stroke(123,104,238);
    circle(50, 430, 80);

    fill(127,255,212);
    stroke(123,104,238);
    rect(90, 420, 460, 20);

    fill(123,104,238);
    stroke(123,104,238);
    circle(320, 430, 80);

    fill(123,104,238);
    stroke(123,104,238);
    circle(590, 430, 80);
}

function take_snapshot(){
    save("Filter_selfie.png");
}
