const Buyer = require('./Buyer');

const {
    SilverInventoryItem,
    GoldenInventoryItem,
    InventoryItem
} = require('./InventoryItem');

const user1 = new Buyer('User1', 4000);

const inventoryItem1 = new InventoryItem("item2", 20.44);
const silverItem = new SilverInventoryItem(inventoryItem1);
const goldItem = new GoldenInventoryItem(silverItem);

const inventoryItem2 = new InventoryItem("item1", 25.99);
const superGoldItem  = new GoldenInventoryItem(inventoryItem2);

user1.buyItem(goldItem);
user1.buyItem(superGoldItem);

user1.printStatus();
superGoldItem.print();