//required packages from node.js and other modules

const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { Triangle, Circle, Square } = require("./shapes");
const Text = require("./text");

//created a class for the command line input
class CLI {
  //this function runs inquirer and prompts for user input
  run() {
    return (
      inquirer
        .prompt([
          {
            name: "text",
            message: "Enter up to three characters:",
            validate: function (input) {
              return input.length > 0 && input.length <= 3; //limit to 3 characters
            },
          },
          {
            name: "textColor",
            message: "Enter the text color (name or hex code):", //text color prompt
          },
          {
            type: "list",
            name: "shape",
            message: "Choose a shape:",
            choices: ["circle", "triangle", "square"], //shape options prompt
          },
          {
            name: "shapeColor",
            message: "Enter the shape color (name or hex code):", //shape color prompt
          },
        ])

        //taking the responses and making them available
        .then((answers) => {
          const { text, textColor, shape, shapeColor } = answers;

          //declaring a new local variable
          let shapeObject;
          //checking the user answer and assigning the value to shapeObject to match the shape from shapes.js
          if (shape == "circle") {
            shapeObject = new Circle(text, textColor, shape, shapeColor);
          }

          if (shape == "triangle") {
            shapeObject = new Triangle(text, textColor, shape, shapeColor);
          }

          if (shape == "square") {
            shapeObject = new Square(text, textColor, shape, shapeColor);
          }

          let textContent = new Text(text, textColor, shape, shapeColor);

          //code for conducting the tests
          shapeObject.setColor(shapeColor);
          textContent.setTextColor(textColor);

          //writing the file the examples folder and naming it logo.svg
          return writeFile(
            join(__dirname, "..", "examples", "logo.svg"),
            //the file will contain some standard code and then fill in the return for the render functions in the shape and text files
            `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${shapeObject.render()}
            ${textContent.render()}
            </svg>`
          );
        })
        .then(() => console.log("Generated logo.svg"))
        .catch((err) => {
          console.log(err);
          console.log("Error");
        })
    );
  }
}

//exporting the module
module.exports = CLI;
