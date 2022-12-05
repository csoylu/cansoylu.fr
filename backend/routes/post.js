const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.use((req, res, next) => {
    if (sessionmanager.checkSession(req.headers.token)) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

router.put('/create', (req, res) => {
    console.log("Deleting post: ");
    console.log(req.body);
    
    const post = new Post({
        creator_id: sessionmanager.sessions[req.headers.token].username,
        content: req.body.content,
        date: Date.now(),
        image: req.body.image,
        likes: 0,
        comments: [],
    });

    post.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({message: err});
    });
});

router.get('/delete', async (req, res) => {
    console.log("Deleting post: ");
    console.log(req.body);

    const data = await Post.findOne({_id: req.body.post_id}, 'creator_id');

    if (data?.creator_id && sessionmanager.sessions[req.headers.token].username === data?.creator_id) {
        Post.deleteOne({_id: req.body.post_id})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json({message: err});
        });
    } else {
        res.status(401).send('Unauthorized');
    }
});

router.post('/like', (req, res) => {
    console.log("Liking post: ");
    console.log(req.body);

    Post.updateOne({_id: req.body.post_id}, {$inc: {"likes": 1}})
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({message: err});
    })
});

router.get('/fetchposts', (req, res) => {
    Post.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json({message: err});
    });
});

module.exports = router;