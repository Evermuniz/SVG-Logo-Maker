class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

  setTextColor(textColor) {
    this.textColor = textColor;
  }
  render() {
    return `<text x="105" y="130" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Text;