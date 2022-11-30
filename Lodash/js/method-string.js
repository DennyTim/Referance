import _ from 'lodash';

// Cases
console.log(_.toLower('Foo'));
console.log(_.toUpper('Foo'));

// Chain-n-Cases
var arr = _.chain('Foo').toLower().split('').value();
console.log(arr);

//Join and Split
console.log(_.split('foo/bar', '/'));
console.log(_.join(['foo', 'bar'], '/'));
