// GENERATIVE SYSTEM || RULE BASED DECISION MAKING
const 
  CRYSTAL_SIZE = 150
  SIDES        = 6
  
  // Layout Grid
  MARGIN  = CRYSTAL_SIZE / 2
  COLUMNS = 6
  ROWS    = 3
  PADDING = CRYSTAL_SIZE * 0.2
  GRIDBOX = CRYSTAL_SIZE + PADDING
  START = (CRYSTAL_SIZE / 2) + MARGIN
let 
  PALETTE = []
  ALL_CRYSTALS = []

function setup() {
  const 
    totalX = START + GRIDBOX * COLUMNS
    totalY = START + GRIDBOX * ROWS
  createCanvas(totalX,totalY, SVG)
  
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
  // background('teal')
  for(let x = 0; x < COLUMNS; x++){
    for(let y = 0; y < ROWS; y++){
      const 
        posX = START + (x * GRIDBOX)
        posY = START + (y * GRIDBOX)
        ALL_CRYSTALS.push(new Crystal(posX, posY))
    }
  }

  ALL_CRYSTALS.forEach(crystal => crystal.render())
}
