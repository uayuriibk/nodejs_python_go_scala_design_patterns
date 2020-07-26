class Person {

    constructor(name='anonymous')  {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;
