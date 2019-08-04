const ConsoleStrategy = require('./console-strategy');
const FileStrategy = require('./file-strategy');

function createStrategy(type) {
    switch (type) {
        case 'console': return new ConsoleStrategy();
        case 'file': return new FileStrategy('log.txt');
    }
}

module.exports = createStrategy;