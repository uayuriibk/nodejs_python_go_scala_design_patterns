const logger = require('./Logger');
const Buyer = require('./Buyer');
const Shop = require('./Shop');

console.log('Starting app...');

const buyer = new Buyer('Andrew', 550)
const shop = new Shop('Piramida mall', [
    {
        item: 'Item1',
        qty: 3,
        price: 422
    },
    {
        item: 'Item2',
        qty: 23,
        price: 8
    }
])

logger.log('Configuration process has been finished...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(` ${log.message}`));