const mongoose = require('mongoose');

//Schema for facebook user
const userSchema = mongoose.Schema({
    name: String,
    password: String,
    id: String,
});

module.exports = mongoose.model('User', userSchema);