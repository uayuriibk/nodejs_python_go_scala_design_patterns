const logger = require('./Logger');

class Buyer {

    constructor(name, money=0) {
        this.name = name;
        this.money = money;
        logger.log(`New Buyer: ${name} has ${money} in his account.`);
    }

}

module.exports = Buyer;