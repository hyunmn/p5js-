
let r=0; 
let g=0; 
let b= 150; 

function setup() {
  canvas= createCanvas(windowWidth, windowHeight);
  
  p= createA('index.html','one '); 
  p.position(20,10);
  p.style('color', 'white'); 
  p.style('text-decoration', 'none');

  a= createA('index2.html',' two '); 
  a.style('color', 'white'); 
  a.parent(p)
  a.style('text-decoration', 'none');

  k= createA('index3.html', ' three '); 
  k.style('color','white'); 
  k.parent(p)
  k.style('text-decoration', 'none')

  four= createA('index4.html',' four '); 
  four.style('color', 'white'); 
  four.parent(p); 
  four.style('text-decoration', 'none');

  five= createA('index5.html',' five '); 
  five.style('color', 'white'); 
  five.parent(p); 
  five.style('text-decoration', 'none');

  six= createA('index6.html',' six '); 
  six.style('color', 'white'); 
  six.parent(p); 
  six.style('text-decoration', 'none');

  seven= createA('index7.html',' seven '); 
    seven.style('color', 'white'); 
    seven.parent(p); 
    seven.style('text-decoration', 'none');

    eight= createA('index8.html',' eight '); 
    eight.style('color', 'white'); 
    eight.parent(p); 
    eight.style('text-decoration', 'none');

  nine= createA('index9.html',' nine '); 
  nine.style('color', 'white'); 
  nine.parent(p); 
  nine.style('text-decoration', 'none');

}


function draw() {
  r = map(mouseX, 0, windowWidth, 0, 255); 
  g =map( mouseY, 0, windowHeight, 0, 255); 
  background(r,g,b);
  
  fill(255); 
  noStroke(); 
  ellipse(mouseX,mouseY, 64, 64); 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  }
