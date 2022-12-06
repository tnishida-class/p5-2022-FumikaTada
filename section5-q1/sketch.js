// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 70,10,20,200,120);
  
}

function balloon(t,x,y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 3;
  
  fill(cr,cg,cb);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  fill(3,0,240);
  text(t, p + x, h + p + y-5);
  fill(cr,cg,cb);
  triangle(x+w-20 , y+h+p , x+w-20 , y+h+p+40 , x+w+p-10 , y+h+p);

}
