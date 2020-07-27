const path = require('path');
const FilesServerProxy = require('./FilesServerProxy');

const filesServerProxy = new FilesServerProxy(require('fs'));

const mdFile = path.join(__dirname, 'Readme.md');

const result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

filesServerProxy.readFile(mdFile, 'UTF-8', result);