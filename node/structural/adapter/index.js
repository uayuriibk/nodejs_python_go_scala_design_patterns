const storage = require('./Storage');

console.log("storage length: ", storage.length);

const uid = storage.getItem("user_id");

console.log("user_id: ", uid);

if(!uid) {
    console.log('User ID has not been found. Setting up user id with token has been started...');
    storage.setItem("token", "TOKENblablabla");
    storage.setItem("user_id", "12345");
} else {
    console.log('User ID has been found.', uid);
    console.log('clearing user id...');
    storage.clear();
}