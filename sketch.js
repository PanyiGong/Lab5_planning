//let circle,rectangle
//let circleY 
//let circledx 
//let circledy
//let rectX, rectY, rectdx, rectdy;
//let circleRadius;
//let rectWidth, rectHeight;
//let circleColor, rectColor;
//let BGColor

function setup() {
  createCanvas(400,400);
  createRandomBGColor()
  noStroke()
  // Randomize the size of the circle and rectangle
    c = createcircle();
    r = createRect();
  
//-----------------------------------------------


}



function draw() {
  background(bg);
 
  // Draw circle

  fill(c.c);
  circle(c.x,c.y,c.r * 2);
  
  // Draw rectangle with random color
  fill(r.c);
  rect(r.x, r.y, r.w, r.h);
  
  // Movement--------------------------
  c.x += c.dx;
  c.y += c.dy;
  
  r.x += r.dx;
  r.y += r.dy;
  
   overlap(c,r)
//--------------------------------------------
  
   function overlap(c,r) {
  // Check for wall collisions for the circle
  if (c.x - c.r < 0 || c.x + c.r > width) {
    c.dx *= -1;
  }
  
  if (c.y - c.r < 0 || c.y + c.r > height) {
    c.dy *= -1;
  }
  
 
  if (r.x < 0 || r.x + r.w > width) {
    r.dx *= -1;
  }
  if (r.y < 0 || r.y + r.h > height) {
    r.dy *= -1;
  }
  
  
  
  // Horizontal collision of two object
  if (c.x + c.r > r.x && c.x - c.r < r.x + r.w &&
// Vertical collision of two object
      c.y + c.r > r.y && c.y - c.r < r.y + r.h) {
//---------------------------------------------
    c.dx *= -1;
    c.dy *= -1;
    r.dx *= -1;
    r.dy *= -1;
  }
  }
}


  function createcircle() {
    r = random(10,30)
    return{
    c: color(random(255),random(255),random(255)),
    x: random(r, width - r),
    y: random(r, height - r),
    r:r,
    dx: random(-3, 3),
    dy: random(-3, 3)
      
  }
  }
function createRect() {
  w = random(10,30)
  h = random(10,30)
  return{
    c: color(random(255),random(255),random(255)),
    x: random(w, width - w),
    y: random(h, height - h),
    w: w,
    h: h, 
    dx: random(-3,3),
    dy: random(-3,3)
}
}
  
function createRandomBGColor() {
  bg = color(random(255), random(255), random(255))
}
