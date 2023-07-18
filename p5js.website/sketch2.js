let r,g,b; 
let squaree= 20; 

function setup() {
  canvas= createCanvas(windowWidth, windowHeight);
  background(0);

  p= createA('index.html','one '); 
  p.position(20,10);
  p.style('color', 'white'); 
  p.style('text-decoration', 'none');

  a= createA('index2.html',' two '); 
  a.style('color', 'white'); 
  a.parent(p)
  a.style('text-decoration', 'none');

  b= createA('index3.html','three'); 
  b.style('color', 'white'); 
  b.parent(p); 
  b.style('text-decoration', 'none');

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

function mousePressed () {
  background(0); 
  squaree= random(5,300); 
  
}
function draw() {
  r= random(255); 
  g= random(255);
  b= random(255); 
  
  fill(r,g,b);
  rectMode(CENTER); 
  square(mouseX, mouseY, squaree); 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  background(0);
  }