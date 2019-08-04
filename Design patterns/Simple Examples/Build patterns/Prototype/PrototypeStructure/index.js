//Протип - это шаблон заполнения для обьектов, если они немного отличаются 

class Person {
    constructor(config) {
        this.skinColor = config.skinColor;
        this.hairColor = config.hairColor;
        this.height = config.height;
        this.weight = config.weight;
        this.gender = config.gender;
    }

    clone() {
        return new Person(Object.assign({}, this));
    }
}

const person = new Person({});
const person2 = person.clone();
person2.height = 200;