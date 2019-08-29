"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changefirstName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    hobbies: ["cooking", "sports"],
    age: 27,
    greet: function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    }
};
//greet({ firstName: "Max", age: 27 });
changefirstName(person);
greet(person);
person.greet("anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet("Anything");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return value1 + value2 * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
