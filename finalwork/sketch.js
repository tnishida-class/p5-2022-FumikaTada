// 最終課題を制作しよう

const H = 300;//国旗の縦の長さ

function setup(){
  createCanvas(H*1.91, H);//旗の比に合わせる
 
}

let num = 0
function draw(){

  background(255);
  //外枠
  strokeWeight(3);
  rect(0,0,width,height);

  //赤線
  fill(164,49,56);
  for(let i = 0; i < 7; i++){
    rect(0,(H/13)*(2*i),H*1.91,H/13);
  }

  //左上の青四角
  fill(59,60,107);
  rect(0,0,H*7*sqrt(2)/13,H*7/13);

  //星
  if(num == 0){
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 6; j++){
        star((7*sqrt(2)/156)*(2*j+1)*H, (2*i+1)*(7/130)*H, 2*H/65);
      }
    }

    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 5; j++){
        star((7*sqrt(2)/156)*(2*j+2)*H, (2*i+2)*(7/130)*H, 2*H/65);
      }
    }
  }
  else{
    let centerX = H*7*sqrt(2)/26;
    let centerY = H*7/26;
    let r = H*7*sqrt(2)/52;
    let theta = TWO_PI / 13;
    for(let i = 0; i < 13; i++){
      star(centerX + r*cos(theta * i),centerY + r*sin(theta * i),2*H/65);
    }
  }
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){
  beginShape();
  noStroke();
  fill(256);
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mousePressed(){
  erase();
  rect(0,0,width,height);
  noErase();
  if(num == 0){
    num = 1;
  }
  else{
    num = 0;
  }
}