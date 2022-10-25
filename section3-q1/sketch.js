
  // 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  
  if (keyIsDown(LEFT_ARROW)) {
    count = (count + 1) % cycle;
    let size=count;

  if(count >50){
    ellipse(width / 2, height / 2, size-((size-50)*2)) ;
  }
  else{
    ellipse(width / 2, height / 2,size);
  }
}

  else{
    count = (count + 0.5) % cycle;
    let size=count;
    fill('red')
    if(count>50){
      ellipse(width / 2, height / 2, size-((size-50)*2)) ;
    }
    
  
  else{
    ellipse(width / 2, height / 2,size);
  }
    

 
  
  
   
}}
