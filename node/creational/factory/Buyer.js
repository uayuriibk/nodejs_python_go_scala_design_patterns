const Person = require('./Person')

class Buyer extends Person {

    constructor(name, money=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }

}

module.exports = Buyer;
