class TeaFactory {
    createDrink(type) {
        switch(type) {
            case 'black': return new BlackTea();
            case 'green': return new GreenTea();
            case 'herbal': return new HerbalTea();
        }
    }
}

module.exports = TeaFactory;