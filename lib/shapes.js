class Shape{

  constructor(shape, shapeColor) {
    this.shape = shape;
    this, shapeColor = shapeColor
  }
}

class Triangle extends Shape {
  constructor(shape, shapeColor) {
    super(shape, shapeColor);
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  constructor(shape, shapeColor) {
    super(shape, shapeColor);
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}


class Square extends Shape {
  constructor(shape, shapeColor) {
    super(shape, shapeColor);
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  
  render() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />`;
  }
}


module.exports = {Triangle, Circle, Square};