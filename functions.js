
// triggers randomise shape/function
function funcPicker(){
  let picker = random(1)

  if(picker > 0.3){
    outlineShape()
  }

  if(picker > 0.5){
    simpleLines()
  }

  if(picker > 0.8){
    circles()
  }
}





// REFACTORED TO OOP/Layers.js
function circles(){
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (CRYSTAL_SIZE/2) * 0.93
  const position = (CRYSTAL_SIZE/2) - (shapeSize/2)
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(strokeColor)
  strokeWeight(1)
  push()
    translate(width/2, height/2)
    
    for(let i = 0; i <= numShapes; i++){
      ellipse(position, 0, shapeSize, shapeSize)
      rotate(angle)
    }
  pop()
}





// REFACTORED TO OOP/Layers.js
function simpleLines(){
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : parseInt(stepsOut * 1.25)
  const step = (CRYSTAL_SIZE/2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))

  const strokeColor = getRandomFromPalette()
  
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const weight = randomSelectTwo() ? 1 : 3
  const angle = 360 / numShapes

  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    
    for(let i = 0; i < numShapes; i++){
      line(start * step, 0 , stop * step, 0)
      rotate(angle)
    }
  pop()
}




// REFACTORED TO OOP/Layers.js
function outlineShape(){
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width/2, height/2)
  if(hexagonTrue){
    hexagon(0,0, CRYSTAL_SIZE/2)
  } else{
    ellipse(0,0,CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
  pop()
}
