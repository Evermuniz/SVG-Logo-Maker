const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");

function generateLogo() {
  inquirer
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


     console.log(answers)})
}

generateLogo();



