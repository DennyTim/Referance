const Coffee = require('./coffee');
const Tea = require('./tea');

class DrinkFactory {
    static createDrink(type, ...args) {
        switch(type) {
            case 'coffee':
                return new Coffee(...args);
            case 'tea':
                return new Tea(...args);
        }
    }
}

module.exports = DrinkFactory;