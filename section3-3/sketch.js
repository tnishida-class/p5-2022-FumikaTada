// テキスト「キーボード操作に反応する」
let x, y, vx, vy;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown("L".charCodeAt(0))){ x-= 10; }

}

function keyPressed(){
  if(key == " "){ // スペースキーを押したらリセット
    x += vx;
    y += vy;   
  
    if(x < 0 || x > width){ vx = -10 * vx; }
    if(y < 0 || y > height){ vy = -10 * vy; }

  // x座標, y座標を画面内に戻しておく
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  } 
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
