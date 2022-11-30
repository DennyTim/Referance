import _ from 'lodash';

// Assign
var state = {
  isLoading: true,
  data: null,
  error: null,
};

var newState = {
  isLoading: true,
  data: {
    id: 1,
    name: 'John',
  },
};

console.log(_.assign({}, state, newState));
