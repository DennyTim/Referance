let user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'New  York'
  }
};

let property = 'name' in user;
console.log(property)