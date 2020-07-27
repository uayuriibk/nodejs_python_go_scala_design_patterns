const PersonBuilder = require('./PersonBuilder');

//employees
const firstPerson = new PersonBuilder('Joe').makeEmployee().makeManager(55).build();
const secondPerson = new PersonBuilder('Leo').makeEmployee().makePartTime().build();
const thirdPerson = new PersonBuilder('Nick').makeEmployee().build();

// Buyers
const firstBuyer = new PersonBuilder('Jessy').withMoney(450).withList(['trousers', 't-shirt']).build();
const secondBuyer = new PersonBuilder('Monika').withMoney(1010).build();

console.log(firstPerson.toString());
console.log(firstBuyer.toString());