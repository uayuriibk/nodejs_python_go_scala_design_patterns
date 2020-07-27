const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const item1 = new CatalogItem("Leather trousers", 80.30);
const item2 = new CatalogItem("Leather belt", 30.20);
const item3 = new CatalogItem("Boots", 50.40);

const group_clothes =new CatalogGroup("--Clothes--", [item1, item2, item3]);

const group_food = new CatalogGroup("--Food--", [
    new CatalogItem("Milk", 5.50),
    new CatalogItem("Bread", 4.60)
]);

const additionalItem = new CatalogItem("Some additional item", 77.77);

const catalog = new CatalogGroup("--Clothes and Food--", [additionalItem, group_clothes, group_food]);

console.log(`Total sum: ${catalog.total}`);

catalog.print();