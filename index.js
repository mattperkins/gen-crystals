// GENERATIVE SYSTEM || RULE BASED DECISION MAKING
const 
  CRYSTAL_SIZE = 150
  // Layout Grid
  MARGIN  = CRYSTAL_SIZE / 2
  COLUMNS = 6
  ROWS    = 3
  PADDING = CRYSTAL_SIZE * 0.2
  GRIDBOX = CRYSTAL_SIZE + PADDING
  START = (CRYSTAL_SIZE / 2) + MARGIN
let 
  PALETTE = null
  ALL_CRYSTALS = []

function setup() {
  const 
    totalX = START + GRIDBOX * COLUMNS
    totalY = START + GRIDBOX * ROWS
  // createCanvas(totalX,totalY, SVG) // SVG download not working
  createCanvas(totalX,totalY)

  PALETTE = [
    color(COLOUR1),  
    color(COLOUR2),
    color(COLOUR3), 
    color(COLOUR4), 
    // color(COLOUR5), 
    color(COLOUR6) 
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {

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