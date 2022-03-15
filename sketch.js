let font;
let points1, points2, points3, points4 
let bounds1, bounds2, bounds3, bounds4
let osc, playing, freq, amp;
let osc1, osc2, osc3, osc4
let pointA, pointB, pointC, pointD

function preload() {
  font = loadFont('./assets/AbrilFatface-Regular.ttf');
}

function setup() {
  osc1 = new p5.Oscillator(396,'sine');
  osc2 = new p5.Oscillator(417,'sine');
  osc3 = new p5.Oscillator(528,'sine');
  osc4 = new p5.Oscillator(639,'sine');
  

  createCanvas(windowWidth, windowHeight);
points1 = font.textToPoints(
    'C R E A T E', 0, 0, 60, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds1 = font.textBounds(
    'C R E A T E', 0, 0, 60);
  
points2 = font.textToPoints(
    'O R D E R', 0, 0, 60, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds2 = font.textBounds(
    'O R D E R', 0, 0, 60);
  
points3 = font.textToPoints(
    'A R O U N D', 0, 0, 60, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds3 = font.textBounds(
    'A R O U N D', 0, 0, 60);
  
points4 = font.textToPoints(
    'M E', 0, 0, 60, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds4 = font.textBounds(
    'M E', 0, 0, 60);
  

 // cursor(CROSS);
  fill(0);
  noStroke();
}

function draw() {
  background(mouseY/9, mouseX/9);
  stroke(mouseY, mouseX, 40, 20)
  strokeWeight(2)

line(width/2, height/6.5 , width/1.14, height/2); 
line(width/1.14, height/2, width/2, height/1.14)
line(width/2, height/1.14, width/8.9, height/2)
line (width/8.9, height/2, width/2, height/6.5)
  
  

  let centerDist1 = dist(mouseX, mouseY, width/2, height/6.5);
   // effects the mouse response to reveal the name

  let transparency1 = map(centerDist1, 0, width / 2, 200, 50);
  transparency1 = constrain(transparency1, 50, 200);
	fill(mouseX/2 , 220, mouseY/2);
  
  let jiggle1 = map(centerDist1, 8, width, 3, 400);
  
push()
  translate((width - abs(bounds1.w)) / 2, 
            (height + abs(bounds1.h)) / 6);
  // this is the placement of the word only
  
  for (let i = 0; i < points1.length; i++) {
    let p = points1[i];
    ellipse(p.x + jiggle1 * randomGaussian(), 
      p.y + jiggle1 * randomGaussian(), 2, 2);
    //size of the dots 
  }   
  
 let centerDist2 = dist(mouseX, mouseY, width - abs(bounds2.w)/1.4, height/2);
  // effects the mouse response to reveal the name

  let transparency2 = map(centerDist2, 0, width / 2, 200, 50);
  transparency2 = constrain(transparency2, 50, 200);
	fill(mouseX/2 , 220, mouseY/2);
  
  let jiggle2 = map(centerDist2, 8, width, 3, 400);
  
  pop()
  push()
  translate((width - abs(bounds2.w)) / 1.08, 
            (height + abs(bounds2.h)) / 2);
    // this is the placement of the word only

  
  for (let i = 0; i < points2.length; i++) {
    let p = points2[i];
    ellipse(p.x + jiggle2 * randomGaussian(), 
      p.y + jiggle2 * randomGaussian(), 2, 2);
  }
  
let centerDist3 = dist(mouseX, mouseY, width/2, height/1.15);
  // effects the mouse response to reveal the name

  let transparency3 = map(centerDist3, 0, width / 2, 200, 50);
  transparency3 = constrain(transparency3, 50, 200);
	fill(mouseX/2 , 220, mouseY/2);
  
  let jiggle3 = map(centerDist3, 8, width, 3, 400);
  
  pop()
  push()
  translate((width - abs(bounds3.w))/2, 
            (height + abs(bounds3.h)) / 1.17);
    // this is the placement of the word only

  for (let i = 0; i < points3.length; i++) {
    let p = points3[i];
    ellipse(p.x + jiggle3 * randomGaussian(), 
      p.y + jiggle3 * randomGaussian(), 2, 2);
  }
  
let centerDist4 = dist(mouseX, mouseY, width/8.9, height/2);
  // effects the mouse response to reveal the name

  let transparency4 = map(centerDist4,  width / 2, 0, 200, 50);
  transparency4 = constrain(transparency4, 50, 200);
	fill(mouseX/2 , 220, mouseY/2);
  
  let jiggle4 = map(centerDist4, 8, width, 3, 400);
  
  pop()
  push()
 translate((width - abs(bounds4.w))/15, 
            (height + abs(bounds4.h)) / 2 ); 
    // this is the placement of the word only

  for (let i = 0; i < points4.length; i++) {
    let p = points4[i];
    ellipse(p.x + jiggle4 * randomGaussian(), 
      p.y + jiggle4 * randomGaussian(), 2, 2);
  
  }
}

function mousePressed(){
  let pointA = ((width/2), (height/6.5))
  let pointB = ((width/1.14), (height/2))
  let pointC = ((width/2, height/1.14))
  let pointD = ((width/8.9, height/2))
  
  osc1.start(pointA);
  osc2.start(pointB)
  osc3.start(pointC)
  osc4.start(pointD)
}

function mouseReleased() {
  osc1.amp(0, 2);
  osc2.amp(0, 2)
  osc3.amp(0, 2)
  osc4.amp(0, 2)
}


  
   


