const Store = require('./store');

const store = new Store([]);

store.addObserver(state => console.log('STATE UPDATED: ', state));

store.updateState(state => {
    return [...state, 1];
});

store.updateState(state => {
    return [...state, 2];
});

store.updateState(state => {
    return [...state, 3];
});