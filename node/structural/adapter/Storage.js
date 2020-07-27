const { writeFile, existsSync, readFileSync, unlink } = require('fs');

class Storage {

    constructor() {
        if (existsSync('storage.json')){
            console.log('Loading items from storage.json');
            const txt = readFileSync('storage.json');
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile('storage.json', JSON.stringify(this.items), error => {
            if (error) {
                console.error(error);
            }
        })
    }

    clear() {
        this.items = {};
        unlink('storage.json', () => {
            console.log('storage.json file is removed');
        })
    }

}

module.exports = new Storage();