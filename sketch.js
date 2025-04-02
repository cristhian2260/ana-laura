function setup() {
  createCanvas(400, 400);
}
  let olhoX;
  let olhoY;

function draw() {
  background("rgb(138,245,227)");
  fill("rgb(255,0,248)");
  circle(200,200,300);// rosto
  fill("rgb(255,215,0)");  

  line(150,270,250,235);// boca
  fill("red");
  triangle(200,180,170,220,220,220);// nariz
  line(114,122,169,94);// sobrancelha esquerdo
  line(232,97,284,110);// sobrancelha direito
  //circle(150,150,10);// pupila esquerda 
  //circle(250,150,10);// pupila direita
  
  olhoX = map(mouseX,0,400,130,170);
  olhoY = map(mouseY,0,400,130,170);
  
  circle(olhoX,olhoY, 10); // nova pupila esquerda
  circle(olhoX+100,olhoY,10); // nova pupila direita
  
  if (mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}
