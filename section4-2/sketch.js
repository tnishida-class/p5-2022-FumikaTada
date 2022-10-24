//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

var x,y,r;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('skyblue');
}
function draw(){
  fill('white');
  ellipse(random(width),random(height),r)
  x=random(width);
  y=random(height);
  if(random()>0.9){
    r = random(50,100);
  }else{
    r = random(20,60) ;
  }

}
