class FilesServerProxy {

    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    readFile(path, format, callback) {
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error(`Markdown files only can be read!`));
        }

        this.fs.readFile(path, format, (error, contents) => {
            if (error) {
                console.error(error);
                return callback(error);
            }
            return callback(null, contents);
        })
    }
}

module.exports = FilesServerProxy;