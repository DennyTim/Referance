class CoffeeFactory {
    createDrink(type) {
        switch(type) {
            case 'esspress': return new Espress();
            case 'americano': return new Americano();
            case 'mocha': return new Mocha();
        }
    }
}

module.exports = CoffeeFactory;