let yo = "   ♪  ← ↑ →  ← ↑ →  ♪ "

function setup() {
  createCanvas(640, 640);
  textSize(width / 17);
  
  


}




function draw() {
  background(200);
  fill(0);  
  text(yo, width/5, height * 0.8);
  
  

    fill("gold");
    strokeWeight(2);
    
 

  let s = sin(frameCount * 0.01);


  let sides = 3;



  let radius = min(width, height) * 0.15;
  for (var i = 0; i < sides; i++) {
    let a = (TWO_PI / sides) * i - PI / 2;
    let p_x = width / 2 + cos(a) * radius,
      p_y = height / 2 + sin(a) * radius;

      


    translate(p_x, p_y*1.005);
    scale(s, 1);
    tri(0, 0, radius);
    resetMatrix();


  



  }
}



function tri(x, y, radius) {
  let sides = 3;
  beginShape();
  for (var i = 0; i < sides; i++) {
    let a = (TWO_PI / sides) * i - PI / 2;
    let p_x = x + cos(a) * radius,
      p_y = y + sin(a) * radius;
    vertex(p_x, p_y);
  }
  endShape();
}



