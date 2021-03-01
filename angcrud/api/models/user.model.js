const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: {type: String, required: true, max: 30},
    lastName: {type: String, required: true, max: 30},
    email: {type: String, required: true, max: 50},
    phone: {type: Number, required: true},
});

//Export the model
module.exports = mongoose.model('User', UserSchema);
