function createStrategy(input, type) {
  switch (type) {
    case "border":
      console.log("created");
      return new ColorBorder(input);
    case "color":
      console.log("created");
      return new ColorText(input);
    default:
      return null;
  }
}

class ColorBorder {
  constructor(input) {
    this.input = input;
  }

  execute(value) {
    console.log("hi1");
    this.input.style = `border: 1px solid ${value}`;
  }
}

class ColorText {
  constructor(input) {
    this.input = input;
  }

  execute(value) {
    console.log("hi2");
    this.input.style = `color: ${value}`;
  }
}

class UIDecorator {
  constructor(selector) {
    this.input = document.querySelector(selector);
    this.strategy = null;
  }

  show(value = "", color) {
    this.strategy = createStrategy(this.input, value);

    if (this.strategy !== null) {
      this.strategy.execute(color);
    }
  }
}

const inputDecorator = new UIDecorator(".enter");
inputDecorator.input.addEventListener("dblclick", e => {
  inputDecorator.show("border", e.target.value);
});

inputDecorator.input.addEventListener("change", e => {
  inputDecorator.show("color", e.target.value);
});
