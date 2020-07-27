const userFactory = require('./userFactory');

const user1 = userFactory('John Doe', 100);
const user2 = userFactory('John Smith', 100, 'employee', 'John and co');

user2.payDay(101);

console.log( user1.toString() );
console.log( user2.toString() );
