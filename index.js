const CRYSTAL_SIZE = 500
const SIDES = 6

function setup() {
  createCanvas(500,500, SVG)
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  fill(0)
  push()
    translate(width/2, height/2)
    rotate(45)
    rect(0,0,25,25)
  pop()
}


// reset the background to black and restart the sequence
function mousePressed() {
  background(0)
}

//fill()
//nostroke()
//stroke()
//strokeWeight()
//line()
//rect()
//ellipse()
//point()