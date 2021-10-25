// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      console.log(i,j);
      rect(20*i,20*j,20,20);
      if(i*j %2==0){
        noFill()
      }
    else{
        fill(51)
    }

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
