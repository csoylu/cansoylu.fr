const mongoose = require('mongoose');
const Comment = require('./Comment');
//Schema for facebook user
const postSchema = mongoose.Schema({
    creator_id: String,
    content : String,
    date: Date,
    image: String,
    likes: Number,
    comments: [Comment.schema],
});

module.exports = mongoose.model('Post', postSchema);