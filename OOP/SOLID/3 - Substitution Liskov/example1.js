/**
 * Наследуюмый класс должен дополнять, а не замещать поведение базового класса.
 *
 * Идея принципа списка подстановки состоит в том, что если у вас есть какой-то метод, например,
 * некоторая функция, которая принимает некоторый базовый тип, она также должна иметь
 * возможность принимать производный тип.
 */

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width}×${this._height}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }

  set height(value) {
    this._width = this._height = value;
  }
}

let useIt = function (rc) {
  let width = rc._width; //width = 5 AND _width = 5 до сеттера
  // из-за setter получим side effect
  rc.height = 10; // _width = 10 height = 10 после сеттера ( в классе было переприсвоение)
  console.log(`Expected area of ${10 * width}, ` + `got ${rc.area}`);
};

let rc = new Rectangle(2, 3);
useIt(rc);

let sq = new Square(5);
useIt(sq);
