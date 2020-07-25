const tourist_prototype = require('./tourist_prototype');

const tourist1 = tourist_prototype.clone();
tourist1.name = `John Doe`;
tourist1.addItemToList('item1');

const tourist2 = tourist_prototype.clone();
tourist2.name = `John Smith`;
tourist2.addItemToList('item2');

console.log(`${tourist1.name}: ${tourist1.shoppingList}`);
console.log(`${tourist2.name}: ${tourist2.shoppingList}`);
