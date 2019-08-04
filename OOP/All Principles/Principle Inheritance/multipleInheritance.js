function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments);
  this.knownLanguage = knownLanguage;
}

function Student(name, surname, subjectOfStudy) {
  Person.apply(this, arguments);
  this.subjectOfStudy = subjectOfStudy;
}

//Создать студент-разработчика
function DevStudent(name, surname, knownLanguage, subjectOfStudy) {
  Developer.call(this, name, surname, knownLanguage);
  Student.call(this, name, surname, subjectOfStudy);
}

let user = new DevStudent('Denny', 'Tim', 'JS', 'JS');
console.log(user);