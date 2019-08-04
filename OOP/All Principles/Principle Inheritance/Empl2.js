//Совмещение методов и с конструкторами обьекта
function mixin(target, source, members) {
  if(members) {
    for(let member of members) {
      if(source.hasOwnProperty) {
        target[member] = source[member];
      }
    }
  } else {
    for (let key in source) {
      if(source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

let dataMixin = {
  save() {
    localStorage.setItem(this.id, JSON.stringify(this));
  },
  load() {
    localStorage.getItem(this.id);
  }
};

class Todo {
  constructor(title, completed = false) {
    this.title = title;
    this.completed = completed;
  } 
}

class Person {
  constructor(name, surname) {
    this.name = name; 
    this.surname = surname;
  }
}

mixin(Person.prototype, dataMixin);
/**
 * или 
 */
Todo.prototype = Object.assign(Todo.prototype, dataMixin);
Person.prototype = Object.assign(Person.prototype, dataMixin);