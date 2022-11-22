const mongoose = require('mongoose');

//Schema for facebook user
const userSchema = mongoose.Schema({
    _id: String,
    password: String,
    date: Date,
    name: String,
    profilePic: String,
});

module.exports = mongoose.model('User', userSchema);