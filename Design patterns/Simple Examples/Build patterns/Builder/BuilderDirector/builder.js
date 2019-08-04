// - Паттерн используется в случаях, когда в классе есть необходимость в двух конструкторах
// - Паттерн имеет возможность настройки обьекта при создании
// - Паттерн, для того чтобы не копаться в свойствах обьекта и 
// передавать огромное количество аргументов в конструктор

class Computer {
    constructor(builder) {
        this.motherboard = builder.motherboard;
        this.processor = builder.processor;
        this.memory = builder.memory;
    }
}

class ComputerBuilder {
    constructor() {
        this.motherboard = null;
        this.processor = null;
        this.memory = null;
    }

    setMotherboard(motherboard) {
        this.motherboard = motherboard;
        return this;
    }

    setProcessor(processor) {
        this.processor = processor;
        return this;
    }

    setMemory(memory) {
        this.memory = memory;
        return this;
    }

    build() {
        const computer = new Computer(this);
        return computer;
    }
}

// Директор использовать не обязательно!!
// Директоров может быть несколько как конструкторов
class Director {

    constructor(builder) {
        this.builder = builder;
    }

    //C помощью методов можно создать любой компьтер

    buildExpensiveComputer(builder) {
        this.builder.setMotherboard().setProcessor().setMemory();

        return builder.build();
    }

    buildCheapComputer(builder) {
        this.builder.setMotherboard();

        return builder.build();
    }
}


//Чтобы сделать цепочку сеттеров нужно каждый раз возвращать ссылку на обьект

// const computerBuilder = new ComputerBuilder()
//         .setMotherboard(new Motherboard())
//         .setProcessor()
//         .setMemory()
//         .build();

module.exports = {
    ComputerBuilder,
    Director
}