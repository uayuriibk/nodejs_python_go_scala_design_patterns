class InventoryItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print(){
        console.log(`${item.name} costs ${item.price}`);
    }
}

class GoldenInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
        this.packed = true;
    }

    print(){
        console.log(`${this.name} costs a lot of money`);
    }
}

class SilverInventoryItem {

    constructor(baseItem) {
        this.name = `Silver ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }

}

module.exports = { SilverInventoryItem, GoldenInventoryItem, InventoryItem };