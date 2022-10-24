const DIA = 200;
let x;

function setup() {
  createCanvas(300, 300);
  background(220);
  noLoop();
}

function draw() {
  x = width/2
  circle(x, height/2, DIA);

  fill(128, 0, 128);
  x -= DIA/4;
  circle(x, height/2, DIA/2);

  fill(0, 128, 128);
  x += DIA/2;
  circle(x, height/2, DIA/4);
}