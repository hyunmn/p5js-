let bubbles= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i= 0; i <20; i++){
  let x = random(width);
  let y=  random(height);
  let r=  random(20,50); 
  let b=  new Bubble(x, y, r); 
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
  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY)
  }
}

function draw() {
  background(0);
  for(let i= 0; i < bubbles.length; i++){
  bubbles[i].move(); 
  bubbles[i].show();
  }
}

class Bubble { 
  constructor(x,y,r) {
  this.x= x; 
  this.y= y; 
  this.r= r;   
  this.j= 0;
  this.q= 0; 
  this.w= 0; 
}
  
  clicked(px, py){
    let d = dist(px,py, this.x, this.y); 
    if(d <this.r){
      this.j=random(255); 
      this.q=random(255); 
      this.w=random(255); 
    }
  }
  
  move() {
    this.x= this.x +random(-1,1);
    this.y= this.y +random(-1,1); 
  }

  
  show() {
    stroke(255); 
    strokeWeight(1); 
    fill(this.j,this.q,this.w); 
    ellipse(this.x, this.y, this.r); 
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  }