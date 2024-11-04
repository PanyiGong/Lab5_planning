let circleX 
let circleY 
let circledx 
let circledy
let rectX, rectY, rectdx, rectdy;
let circleRadius;
let rectWidth, rectHeight;
let circleColor, rectColor;
let BGColor

function setup() {
  createCanvas(400,400);
  createRandomBGColor()
  noStroke()
  // Randomize the size of the circle and rectangle
  circleRadius = random(10,30); // Random radius between 10,30
  rectWidth = random(10,30);    // Random width between 10,30
  rectHeight = random(10,30);    // Random height between 20,40
//-----------------------------------------------
  
  
  // Create a circle with random position and speed
  circleX = random(circleRadius, width - circleRadius);
  circleY = random(circleRadius, height - circleRadius);
  circledx = random(-3, 3);
  circledy = random(-3, 3);
  
  //Create a circle with random position and speed
  rectX = random(rectWidth, width - rectWidth);
  rectY = random(rectHeight, height - rectHeight);
  rectdx = random(-3, 3);
  rectdy = random(-3, 3);
  
  
  // Randomize colors for the circle and rectangle
  circleColor = color(random(255), random(255), random(255));
  rectColor = color(random(255), random(255), random(255));

}



function draw() {
  background(bg);
  
  // Draw circle
  fill(circleColor);
  circle(circleX, circleY, circleRadius);
  
  // Draw rectangle with random color
  fill(rectColor);
  rect(rectX, rectY, rectWidth, rectHeight);
  
  // Movement--------------------------
  circleX += circledx;
  circleY += circledy;
  
  rectX += rectdx;
  rectY += rectdy;
//--------------------------------------------
  
  // Check for wall collisions for the circle
  if (circleX - circleRadius < 0 || circleX + circleRadius > width) {
    circledx *= -1;
  }
  
  if (circleY - circleRadius < 0 || circleY + circleRadius > height) {
    circledy *= -1;
  }
  
  // Check for wall collisions for the rectangle
  if (rectX < 0 || rectX + rectWidth > width) {
    rectdx *= -1;
  }
  if (rectY < 0 || rectY + rectHeight > height) {
    rectdy *= -1;
  }
  
  // Horizontal collision of two object
  if (circleX + circleRadius > rectX && circleX - circleRadius < rectX + rectWidth &&
// Vertical collision of two object
      circleY + circleRadius > rectY && circleY - circleRadius < rectY + rectHeight) {
//---------------------------------------------
    circledx *= -1;
    circledy *= -1;
    rectdx *= -1;
    rectdy *= -1;
  }
}

function createRandomBGColor() {
  bg = color(random(255), random(255), random(255))
}