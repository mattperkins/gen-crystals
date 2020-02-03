// OOP
class Layer{
  constructor(){
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = LAYER_ANGLE / this.numShapes
    this.stepsOut = STEPSOUT
    this.singleStep = (CRYSTAL_SIZE/2) / this.stepsOut
    this.thinStroke = THINSTROKE
    this.thickStroke = THICKSTROKE
    this.layerColor = getRandomFromPalette()
  }
}

// Inheritance
class OutlineShape extends Layer{
  constructor(){
    super()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    this.hexagonTrue = randomSelectTwo()
  } 
  render(){
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    if(this.hexagonTrue){
      // control user input to avoid breaking design pattern
      OUTLINESHAPE_HEXDIVIDE < 2 ? OUTLINESHAPE_HEXDIVIDE = 2 : OUTLINESHAPE_HEXDIVIDE
      hexagon(0,0, CRYSTAL_SIZE/OUTLINESHAPE_HEXDIVIDE)
    } else{
      ellipse(0,0,CRYSTAL_SIZE, CRYSTAL_SIZE)
    }
    pop()
  }
}

class SimpleLines extends Layer{
  constructor(){
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : parseInt(this.stepsOut * SIMPLELINES_STEPSOUT_MULTI)
    this.step = (CRYSTAL_SIZE/2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
    SIMPLELINES_SIDES_MULTI > 20 ? SIMPLELINES_SIDES_MULTI = 20 : SIMPLELINES_SIDES_MULTI
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * SIMPLELINES_SIDES_MULTI
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    this.angle = SIMPLELINES_ANGLE / this.numShapes
  }
  render(){
    noFill()
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    for(let i = 0; i < this.numShapes; i++){
      line(this.start * this.step, 0 , this.stop * this.step, 0)
      rotate(this.angle)
    }
    pop()
  }
}

class Circles extends Layer{
  constructor(){
    super()
    // control user input to avoid breaking design pattern
    CIRCLES_SHAPESIZE_MULTI > 2.1 ? CIRCLES_SHAPESIZE_MULTI = 2.1 : CIRCLES_SHAPESIZE_MULTI
    this.shapeSize = (CRYSTAL_SIZE/2) * CIRCLES_SHAPESIZE_MULTI
    this.position = (CRYSTAL_SIZE/2) - (this.shapeSize/2)
  }
  // create the render function
  render(){
    noFill()
    stroke(this.layerColor)
    strokeWeight(1)
    push()
    for(let i = 0; i <= this.numShapes; i++){
      ellipse(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class DottedLines extends Layer{
  constructor(){
    super()
    DOTTEDLINES_SIDES_MULTI > 10 ? DOTTEDLINES_SIDES_MULTI = 10 : DOTTEDLINES_SIDES_MULTI
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * DOTTEDLINES_SIDES_MULTI
    this.angle = DOTTEDLINES_ANGLE / this.numShapes
    DOTTEDLINES_SHAPESIZE > 40 ? DOTTEDLINES_SHAPESIZE = 40 : DOTTEDLINES_SHAPESIZE
    this.shapeSize = DOTTEDLINES_SHAPESIZE
    this.centerOffset = this.singleStep
  }
  render(){
    fill(this.layerColor)
    noStroke()
    push()
    for(let i = 0; i <= this.numShapes; i++){
      for(let x = this.centerOffset; x < CRYSTAL_SIZE / 2; x += this.singleStep){
        rect(x, 0, this.shapeSize, this.shapeSize)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class CenteredShape extends Layer{
  constructor(){
    super()
    this.randomShape = random(1)
    this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut - 2)) * this.singleStep
  }
  render(){
    fill(this.layerColor)
    noStroke()
    push()
    if(this.randomShape < 0.1){
      rect(0,0,this.shapeSize * 2, this.shapeSize * 2)
    } else if(this.randomShape >= 0.1 && this.randomShape < 0.6){
      ellipse(0,0,this.shapeSize * 2, this.shapeSize * 2)
    } else if(this.randomShape >= 0.6){
      rotate(this.angle / 2)
      hexagon(0,0,this.shapeSize)
    }
    pop()
  }
}

class RingOfShapes extends Layer{
  constructor(){
    super()
    this.steps = floor(random(1, this.stepsOut))
    this.center = this.steps * this.singleStep
    this.randomShape = random(1)
    this.direction = randomSelectTwo() // used for Triangle only
    this.fillColor = randomSelectTwo() ? this.layerColor : color(0,1)
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

    // control overlap
    if(this.steps < this.stepsOut / 2){
      this.radius = floor(random(1, this.steps)) * this.singleStep
    } else if(this.steps > this.stepsOut / 2){
      this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
    } else{
      this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
    }
  }
  render(){
    stroke(this.layerColor)
    fill(this.fillColor)
    strokeWeight(this.weight)
    push()
    for(let i=0; i<this.numShapes; i++){
      if(this.randomShape < 0.33){
        ellipse(0, this.center, this.radius, this.radius)
      } else if(this.randomShape >= 0.33 && this.randomShape < 0.66){
        rect(0, this.center, this.radius, this.radius)
      } else if(this.randomShape >= 0.66){
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class SteppedHexagon extends Layer{
  constructor(){
    super()
    STEPPEDHEX_STEPSOUT_MULTI > 5 ? STEPPEDHEX_STEPSOUT_MULTI = 5 : STEPPEDHEX_STEPSOUT_MULTI
    this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * STEPPEDHEX_STEPSOUT_MULTI
    // control user input to avoid breaking design pattern
    STEPPEDHEX_CENTEROFFSET > 1 ? STEPPEDHEX_CENTEROFFSET = 1 : STEPPEDHEX_CENTEROFFSET
    this.centerOffset = (CRYSTAL_SIZE / 2) * STEPPEDHEX_CENTEROFFSET
    this.singleStep = ((CRYSTAL_SIZE /2) - this.centerOffset) / this.numSteps
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }
  render(){
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    rotate(this.angle / 2)
    for(let i = 1; i < this.numSteps + 1; i++){
      hexagon(0, 0, this.centerOffset + (i * this.singleStep))
    }
    pop()
  }
}