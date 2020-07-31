class Buyer {

    constructor(name, account=0) {
        this.name = name;
        this.account = account;
        this.items = [];
    }

    buyItem(item) {
        if (item.price > this.account) {
            console.log(`Not enough money to buy the item - ${item.name}`);
        } else {
            console.log(`It has been bought item - ${item.name}`);
            this.account -= item.price;
            this.items.push(item);
        }
    }

    printStatus() {
        console.log(`${this.name} has been purchased. Total items count: ${this.items.length}`);
        this.items.forEach( item => {
            console.log(` * ${item.name} - ${item.price}`);
        });
        console.log(`${this.name} has ${this.account.toFixed(2)} remaining. `);
    }

}

module.exports = Buyer;