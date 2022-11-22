const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


// Password encryption
const saltRounds = 10;



router.get('/login', (req, res) => {
    console.log('login');
    res.send('in user test');
})

router.post('/create', (req, res) => {
    User.find({_id: req.body.id}, (err, user) => {
        if (user.length > 0) {
            console.log(`Cannot create user ${req.body.id} already exists`);
            res.send(false);
        } else {
            console.log(`Creating user ${req.body.id}`);
            const user = new User({
                _id: req.body.id,
                name: req.body.name,
                date: Date.now(),
                profilePic: "",
            });
            user.save()
            .catch(err => {
                res.send("Error: " + err);
                console.log(err);
            });

            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                // Store hash in your password DB.
                user.password = hash;
                user.save()
                .catch(err => {
                    res.send("Error: " + err);
                    console.log(err);
                });
            });
            res.send(true);
        }
    });
})

module.exports = router;