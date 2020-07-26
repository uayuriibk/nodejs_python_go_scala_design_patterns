const userFactory = require('./userFactory');

const user1 = userFactory('John Doe', 100);
const user2 = userFactory('John Smith', 100, 'employee', 'John and co');

user1.payDay(100);

console.log( user1.toString() );
console.log( user2.toString() );
