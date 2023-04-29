//require the module export from the text.js file
const Text = require('../lib/text')

describe("Triangle Text", () => {
  it("should return blue", () => {
    const text = new Text();
    text.setTextColor("blue");//calling the setTextColor function to set the text color to blue
    //we would expect this outcome if the setColor function works as expected
    expect(text.render()).toEqual(
      '<text x="50%" y="50%" font-weight="bold" font-size="50px" dominant-baseline="middle" text-anchor="middle" font-family="monospace" fill="blue">undefined</text>'
    );
  });
});
