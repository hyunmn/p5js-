let bubbles = [];

function setup() {

  createCanvas(windowWidth, windowHeight);

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

function mouseDragged() {
  let r = 40;
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(100);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }

  if (bubbles.length > 10) {
    bubbles.splice(0, 1);
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness=bright; 
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(1);
    fill(255,0,0,this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  }
