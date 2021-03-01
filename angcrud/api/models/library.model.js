const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LibrarySchema = new Schema({
    bookName: {type: String, required: true, max: 30},
    authorName: {type: String, required: true, max: 30},
    authorEmail: {type: String, required: true, max: 50},
    publishOn: {type: Number, required: true},
});

//Export the model
module.exports = mongoose.model('Library', LibrarySchema);
