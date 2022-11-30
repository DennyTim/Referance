//Getting parts of array
import _ from 'lodash';

console.log('head', _.head([1, 2, 3]));
console.log('head', _.head('foo'));
console.log('tail', _.tail([1, 2, 3]));

const numbers = [1, 2, 3];
console.log('initial', _.initial('foo'));
