class ColorBorder {
  constructor(input) {
    this.input = input;
  }

  execute(value) {
    this.input.style = `border: 1px solid ${value}`;
  }
}

class ColorText {
  constructor(input) {
    this.input = input;
  }

  execute(value) {
    this.input.style = `color: ${value}`;
  }
}

class UIDecorator {
  constructor(selector) {
    this.input = document.querySelector(selector);
    this.strategy = null;
  }

  createStrategy(input, type) {
    switch (type) {
      case "border":
        return new ColorBorder(input);
      case "color":
        return new ColorText(input);
      default:
        return null;
    }
  }

  show(value = "", color) {
    this.strategy = this.createStrategy(this.input, value);
    (this.strategy instanceof ColorText ||
      this.strategy instanceof ColorBorder) &&
      this.strategy.execute(color);
  }
}

const inputDecorator = new UIDecorator(".enter");
inputDecorator.input.addEventListener("dblclick", e => {
  inputDecorator.show("border", e.target.value);
});

inputDecorator.input.addEventListener("change", e => {
  inputDecorator.show("color", e.target.value);
});
