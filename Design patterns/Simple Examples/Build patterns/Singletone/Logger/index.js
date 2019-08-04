const Logger = require('./logger');
const logger = new Logger('log.txt');
const logger1 = new Logger('log1.txt');

logger.write('hello');
console.log(logger === logger1);