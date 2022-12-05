const mongoose = require('mongoose');
//Schema for facebook user
const commentSchema = mongoose.Schema({
    creator_id: String,
    message : String,
    date: Date,
    likes: Number,
});

module.exports = mongoose.model('Comment', commentSchema);