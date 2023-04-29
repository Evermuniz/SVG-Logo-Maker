const Text = require('../lib/text')

describe("Triangle Text", () => {
  it("should return blue", () => {
    const text = new Text();
    text.setTextColor("blue");
    expect(text.render()).toEqual('<text x="105" y="130" fill="blue">undefined</text>');
  });
});
