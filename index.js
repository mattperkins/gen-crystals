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
  
  // const layer = new Layer()
  // console.log(layer)

  // const circles = new Circles()
  // circles.render()  
  
  // const simpleLines = new SimpleLines()
  // simpleLines.render()  
  
  // const outlineShape = new OutlineShape()
  // outlineShape.render()  


// FUNCTIONAL
  // funcPicker()

  // circles()
  // simpleLines()
  // outlineShape()

  
  // testLines() 
  
} // \draw


// randomise shape/OOP
function picker(){
  let picker = random(1)

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
