const Chat = require('./chat');
const User = require('./user');

const chat = new Chat();

const user1 = new User('User 1', chat);
const user2 = new User('User 2', chat);
const user3 = new User('User 3', chat);

chat.subscribe(user1);
chat.subscribe(user2);
chat.subscribe(user3);

user1.say('Hello');
user2.say('Hey!');
user3.say('How are you?');