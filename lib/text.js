//class for the text input using the text and text color inputs
//separated this into it's own file for better testing

class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    //function for conducting tests
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  //code for the text portion of the svg file
  render() {
    return `<text x="50%" y="50%" font-weight="bold" font-size="50px" dominant-baseline="middle" text-anchor="middle" font-family="monospace" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Text;