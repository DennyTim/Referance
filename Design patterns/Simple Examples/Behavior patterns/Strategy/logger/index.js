const Logger = require('./logger');
const createStrategy = require('./strategy-factory');

const logger = new Logger();

logger.strategy = createStrategy('file');

logger.log('42');