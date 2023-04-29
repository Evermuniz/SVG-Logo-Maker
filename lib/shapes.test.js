const {Triangle}= require('./shapes');
const {Circle} = require('./shapes');
const {Square} = require('./shapes')

describe("Triangle", () => {
  it("should return blue", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});


describe("Circle", () => {
  it("should return blue", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe("Square", () => {
  it("should return blue", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="blue" />');
  });
});

