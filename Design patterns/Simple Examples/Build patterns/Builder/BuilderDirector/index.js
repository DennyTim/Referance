const {ComputerBuilder, Director} = require('./builder');

const builder = new ComputerBuilder();
const director = new Director(builder);

const comp1 = director.buildExpensiveComputer();
const comp2 = director.buildCheapComputer();