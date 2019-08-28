"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changefirstName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    age: 27
};
greet(person);
changefirstName(person);
