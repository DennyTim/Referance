interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastname: string): void;
}

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changefirstName(person: NamedPerson) {
  person.firstName = "Anna";
}

const person = {
  firstName: "Max",
  hobbies: ["cooking", "sports"],
  age: 27,
  greet(lastname: string) {
    console.log("Hi, I am " + this.firstName + " " + lastname);
  }
};

//greet({ firstName: "Max", age: 27 });
changefirstName(person);
greet(person);
person.greet("anything");

class Person implements NamedPerson {
  firstName!: string;
  lastName!: string;

  greet(lastname: string) {
    console.log("Hi, I am " + this.firstName + " " + lastname);
  }
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet("Anything");

//Function types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return value1 + value2 * 2;
};

console.log(myDoubleFunction(10, 20));

//Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "Max",
  greet(lastName: string) {
    console.log("Hello!");
  }
};

console.log(oldPerson);
