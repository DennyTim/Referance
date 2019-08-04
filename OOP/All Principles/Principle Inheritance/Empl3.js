class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

//High older component
function withDisplayName(Superclass) {
  return class extends Superclass {
    displayName() {
      return this.name;
    }
  }
}

class ExtendedPerson extends withDisplayName(Person) {
  constructor(name, surname) {
    super(name, surname);
  }
}

let person = new ExtendedPerson('', '');
person.displayName();