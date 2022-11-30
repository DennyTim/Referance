import _ from 'lodash';

console.log(`undefined, undefined isEqual`, _.isEqual(undefined, undefined));
console.log(`{ a: 1 }, { a: 1 } isEqual`, _.isEqual({ a: 1 }, { a: 1 }));
console.log(`null isEmpty`, _.isEmpty(null));
console.log(`{} isEmpty`, _.isEmpty({}));
console.log(`[] isEmpty`, _.isEmpty([]));
console.log(`null isNil`, _.isNil(null));
