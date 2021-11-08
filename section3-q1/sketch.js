// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」キーを押す→早い
let count;
let cycle;
count=0;
cycle=100;

function setup(){
  createCanvas(200,200);
}

function draw(){
  background(160,192,255);
  if(keyIsDown("".charCodeAt(0))){count=(Count+2)%cycle;}
  else{count=(count+1)%cycle;}
  if(count>60){size=count}
  else{size=100-count}
  ellipse(width/2,height/2,size);


}
