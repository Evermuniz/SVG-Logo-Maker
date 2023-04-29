//required packes from the shapes file for testing

const {Triangle}= require('../lib/shapes');
const {Circle} = require('../lib/shapes');
const {Square} = require('../lib/shapes')

describe("Triangle", () => {
  it("should return blue", () => {
    const triangle = new Triangle();
    triangle.setColor("blue"); //calling the setColor function to set the color to blue
    //we would expect this outcome if the setColor function works as expected
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); 
  });
});


describe("Circle", () => {
  it("should return blue", () => {
    const circle = new Circle();
    circle.setColor("blue"); //calling the setColor function to set the color to blue
    //we would expect this outcome if the setColor function works as expected
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe("Square", () => {
  it("should return blue", () => {
    const square = new Square();
    square.setColor("blue"); //calling the setColor function to set the color to blue
    //we would expect this outcome if the setColor function works as expected
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="blue" />');
  });
});



