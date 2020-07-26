const Employee = require('./Employee');
const Buyer = require('./Buyer');

const userFactory = (name, money=0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer);
    } else {
        return new Buyer(name, money);
    }
}

module.exports = userFactory;
