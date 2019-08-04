//Абстракция

let user = {
firstname: 'Brendan',
lastname: 'Eich',
email: 'brendan@moz.com'
}

//Обьекты

let user = {
firstname: 'Brendan',
lastname: 'Eich',
email: 'brendan@moz.com'

greet() {
return `Привет меня зовут ${this.firstname}`
}
}

//Классы - позволяют создавать обьекты одной и той же формы

class User {
constructor(firstname, lastname, email) {
this.firstname = firstname;
this.lastname = lastname;
this.email = email;
}

greet() {
return `Привет меня зовут ${this.firstname}`
}
}

let brendan = new User('Brendan', 'Eich', 'brendan@moz.com')

//Инкапсуляция - механизм скрытия того как работает обьект внутри

let date = new Date();
date.getDate();
date.getDay();
date.getMonth();
date.getFullYear();

//Наследование

class Person {
constructor(firstname, lastname) {
this.firstname = firstname;
this.lastname = lastname;
}
}

class User extends Person {
constructor(firstname, lastname, email) {
super(firstname, lastname)
this.email = email;
}
}

// Полиморфизм

let people = [
new Person(),
new User(),
new Person()
];

for (let person of people) {
person.greet();
}

//Accоциация

- тогда когда один обьект будет внутри содержать себя другой обьект
- объекты связаны при этом они не зависимы друг от друга

class Author {
constructor(firstname, lastname) {
this.firstname = firstname;
this.lastname = lastname;
}
}

class Course {
constructor(firstname, lastname, author) {
this.firstname = firstname;
this.lastname = lastname;
this.author = author;
}
}

//Агрегация

- удалив курс соответственно все уроки удаляються

class Lesson {
constructor(title) {
this.title = title;
}
}

class Course {
constructor (title, topic, lessons) {
this.title = title;
this.topic = topic;
this.lessons = lessons;
}
}

//Композиция

- создав пользователя аккаунт тоже создается

class Account {
constructor(title) {
this.title = title;
}
}

class User {
constructor(firstname, lastname) {
this.firstname = firstname;
this.lastname = lastname;
this.account = new Account('Google');
}
}

//Компонентный подход

- Определить сущности
  - Список задач
    - Задача
      ( Создаваться,
      добавляться,
      удаляться
      иметь состояние,
      иметь обработчики событий
      удалять обработчики событий)
  - Список фильтров
    -Фильтр
  - Статистика
