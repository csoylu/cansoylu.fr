const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const sessionmanager = require('../managers/sessionmanager');

// Check if token in sessionmanager
router.use((req, res, next) => {
    console.log(req.headers.token);
    if (sessionmanager.checkSession(req.headers.token)) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});


router.put('/create', (req, res) => {
    console.log("Creating comment: ");
    console.log(req.body);
    comment = new Comment({
        creator_id: req.body.creator_id,
        message: req.body.message,
        date: Date.now(),
        likes: 0,
    });
    Post.updateOne({_id: req.body.post_id}, {$push: {"comments": comment}})
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({message: err});
    });
});

router.get('/delete', async (req, res) => {
    console.log("Deleting comment: ");
    console.log(req.body);

    const data = await Post.findOne({comments: {$elemMatch: {_id: req.body.comment_id}}},'creator_id');


    if (data?.creator_id && sessionmanager.sessions[req.headers.token].username === data?.creator_id) {

        Post.updateOne({comments: {$elemMatch: {_id: req.body.comment_id}}}, {$pull: {comments: {_id: req.body.comment_id}}})
        .then(data => {
            res.status(200).json(data);
            console.log("200");
        })
        .catch(err => {
            res.status(400).json({message: err});
            console.log("400");
        });
    } else {
        res.status(401).send('Unauthorized');
        console.log("401");
    }
});


router.get('/like', (req, res) => {
    console.log("Liking comment: ");
    console.log(req.body);

    Post.updateOne({comments: {$elemMatch: {_id: req.body.comment_id}}}, {$inc: {"comments.$.likes": 1}})
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({message: err});
    });
});

module.exports = router;