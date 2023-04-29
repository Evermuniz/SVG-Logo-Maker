//creating shape class using the shape and shapeColor inputs
class Shape{

  constructor(shape, shapeColor) {
    this.shape = shape;
    this, shapeColor = shapeColor
  }
}

//inheriting shape and shapeColor from Shape class
//not sure if this is the best way to do this
class Triangle extends Shape {
  constructor(shape, shapeColor) {
    super(shape, shapeColor);
  }

  //function to conduct tests
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  //triangle specific code with the shape color
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}


//inheriting shape and shapeColor from Shape class
class Circle extends Shape {
  constructor(shape, shapeColor) {
    super(shape, shapeColor);
  }

  //function to conduct tests
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  //circle specific code with the shape color
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

//inheriting shape and shapeColor from Shape class
class Square extends Shape {
  constructor(shape, shapeColor) {
    super(shape, shapeColor);
  }

  //function to conduct tests
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  
  //square specific code with the shape color
  render() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />`;
  }
}

//exporting the 3 different shape classes
module.exports = {Triangle, Circle, Square};