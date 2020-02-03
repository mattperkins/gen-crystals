// GENERATIVE SYSTEM || RULE BASED DECISION MAKING
const 
  CRYSTAL_SIZE = 500
  SIDES = 6
  layers = []
let 
  PALETTE = []

function setup() {
  createCanvas(530,530, SVG)
  
  PALETTE = [ 
    color(255,52,154), // pink 
    color(4,0,152) // blue
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
// OOP
  picker()
  // testLines() 
} 

// randomise shape/OOP
function picker(){
  let picker = random(1)

  if(picker > 0.1){
    layers.push(new DottedLines())
  }
  if(picker > 0.2){
    layers.push(new CenteredShape())
  }
  if(picker > 0.1){
    layers.push(new RingOfShapes())
  }
  if(picker > 0.2){
    layers.push(new SteppedHexagon())
  }


  if(picker > 0.3){
    layers.push(new OutlineShape())
  }
  
  if(picker > 0.5){
    layers.push(new SimpleLines())
  }

  if(picker > 0.8){
    layers.push(new Circles())
  }

  console.log(layers)
  layers.forEach(layer => layer.render())
}
