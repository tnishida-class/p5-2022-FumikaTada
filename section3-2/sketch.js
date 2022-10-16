let x,y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width/2;
  y=height/2;
}
function draw() {
  background(160,192,255);
  ellipse(x,y,30);
  x += 2;
  y -= 2;
  if(x>width){x=0;}
  else if(x<0){x=width;}
  if(y>height){y=0;}
  if(y<0){y=height;}
}