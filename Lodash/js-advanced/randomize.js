import _ from 'lodash';

// Random
function random(from, to) {
  return Math.floor(Math.random() * to) + from;
}

console.log(_.random(100));
