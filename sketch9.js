let bubbles=[];

let flower; 
let flower2; 

function preload(){
  flower =loadImage('flower.png'); 
  flower2= loadImage('flower2.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<50; i++){
    let x= random(width);
    let y= random(height); 
    let r= random(50,100) ;
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }

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

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  background(0);
  for(let i=0; i< bubbles.length; i++) {
    bubbles[i].show(); 
  }
}

class Bubble { 
  constructor(x,y,r,img) {
  this.x= x; 
  this.y= y; 
  this.r= r; 
  this.flower= flower; 
}
  clicked(px, py) {
    if (
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      this.flower = flower2; 
    }
    }
  
  move() {
    this.x= this.x +random(-0.5,0.5);
    this.y= this.y +random(-0.5,0.5); 
  }
  
  show() {
    image(this.flower, this.x, this.y, this.r, this.r); 
  }
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  }