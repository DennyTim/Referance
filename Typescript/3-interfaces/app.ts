interface NamedPerson {
  firstName: string;
}

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changefirstName(person: NamedPerson) {
  person.firstName = "Anna";
}

const person = {
  firstName: "Max",
  age: 27
};

greet(person);
changefirstName(person);
