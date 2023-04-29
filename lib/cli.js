const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { Triangle, Circle, Square} = require('./shapes');
const Text = require('./text')

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          message: "Enter up to three characters:",
          validate: function (input) {
            return input.length > 0 && input.length <= 3;
          },
        },
        {
          name: "textColor",
          message: "Enter the text color (name or hex code):",
        },
        {
          type: "list",
          name: "shape",
          message: "Choose a shape:",
          choices: ["circle", "triangle", "square"],
        },
        {
          name: "shapeColor",
          message: "Enter the shape color (name or hex code):",
        },
      ])
      .then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
        console.log(answers);

        let shapeObject;
        if (shape == 'circle'){
          shapeObject = new Circle(text, textColor, shape, shapeColor);
        }

        if (shape == 'triangle'){
          shapeObject = new Triangle(text, textColor, shape, shapeColor);
        }

        if (shape == 'square'){
          shapeObject = new Square(text, textColor, shape, shapeColor);
        }

        let textContent = new Text(text, textColor, shape, shapeColor);

        shapeObject.setColor(shapeColor);
        textContent.setTextColor(textColor);

  
        return writeFile(
          join(__dirname, "..", "examples", "logo.svg"),
          `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

            ${shapeObject.render()}
            ${textContent.render()};

            </svg>;`
        );

        
      });
  }
}

module.exports = CLI;
