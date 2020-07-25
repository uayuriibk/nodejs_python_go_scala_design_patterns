const Buyer = require('./Buyer');

const tourist = new Buyer();

tourist.addItemToList(`knife`);
tourist.addItemToList('tent');
tourist.addItemToList('map');
tourist.addItemToList('backpack');

module.exports = tourist;