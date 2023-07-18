let bubble1; 
let bubble2; 

function setup() {
  canvas= createCanvas(windowWidth, windowHeight);
  background(0);
  bubble1= new Bubble(); 
  bubble2= new Bubble();

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
  bubble1.move(); 
  bubble1.show(); 
  bubble2.move(); 
  bubble2.show(); 
}

class Bubble { 
  constructor() {
  this.x = windowWidth*0.5; 
  this.y = windowHeight*0.5; 
}
  move() {
    this.x= this.x +random(-10,10);
    this.y= this.y +random(-10,10); 
  }
  
  show() {
    noStroke(); 
    fill(random(255),random(255),random(255),50);
    ellipse(this.x, this.y, 24, 100); 
  }
}

function mousePressed(){
  background(0); 
  this.x = mouseX; 
  this.y= mouseY; 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  background(0);
  }