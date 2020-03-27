const layerConstructors = [
  {
    name: 'Outline Shape',
    init: () => new OutlineShape(),
    weight: OUTLINESHAPE_WEIGHT
  },
  {
    name: 'Simple Lines',
    init: () => new SimpleLines(),
    weight: SIMPLELINES_WEIGHT
  },
  {
    name: 'Circles',
    init: () => new Circles(),
    weight: CIRCLES_WEIGHT
  },
  {
    name: 'Dotted Lines',
    init: () => new DottedLines(),
    weight: DOTTEDLINES_WEIGHT
  },
  {
    name: 'Centered Shape',
    init: () => new CenteredShape(),
    weight: CENTEREDSHAPE_WEIGHT
  },
  {
    name: 'Ring Of Shape',
    init: () => new RingOfShapes(),
    weight: RINGOFSHAPES_WEIGHT
  },
  // *** -> new duplicate added 27.3.20 <- ***
  {
    name: 'Ring Of Shape2',
    init: () => new RingOfShapes(),
    weight: RINGOFSHAPES2_WEIGHT
  },
  {
    name: 'Stepped Hexagon',
    init: () => new SteppedHexagon(),
    weight: STEPPEDHEXAGON_WEIGHT
  },
  // *** -> new shape 3.2.20 <- ***
  {
    name: 'Triangler',
    init: () => new Triangler(),
    weight: TRIANGLER_WEIGHT
  },
  {
    name: 'Triangler2',
    init: () => new Triangler(),
    weight: TRIANGLER2_WEIGHT
  },
  // Development Only
  {
    name: 'Test Lines',
    init: () => testLines(),
    weight: 1 // off
  }
]