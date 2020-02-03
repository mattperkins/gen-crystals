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
    color(255,52,154,250), // pink 
    color(4,0,152,240), // blue

    color(50,50,50,10), // alpha
    color(180,180,180,50) // alpha

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
  
  layerConstructors.forEach(lcon => {
    let picker = random(1)
    if(picker > lcon.weight){
      layers.push(lcon.init())
    }
  })

  console.log(layers)

  layers.forEach(layer => layer.render())
}
