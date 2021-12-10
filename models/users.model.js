const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const user = mongoose.model('users', UserSchema);
module.exports = user;