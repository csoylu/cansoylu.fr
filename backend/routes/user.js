const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const sessionManager = require('../managers/sessionmanager');
// Password encryption
const saltRounds = 10;



router.get('/login', (req, res) => {
    console.log("User login: ");
    console.log(req.body);

    User.find({ _id: req.body.id }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        if (user.length > 0) {
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    res.status(401).send('Password is incorrect.').end();
                }
                if (result) {
                    res.status(200).send(sessionManager.createSession(req.body.id)).end();
                }
            })
        }
        else{
            res.status(401).send('Username not found.').end();
        }
    })
})

router.get('/checktoken', (req, res) => {
    if (sessionManager.checkSession(req.body.token)) {
        res.status(200).send('Token is valid.').end();
    }
    else {
        res.status(401).send('Token is invalid.').end();
    }
})

router.post('/create', (req, res) => {
    console.log("Creating user: ");
    console.log(req.body);

    User.find({_id: req.body.id}, (err, user) => {
        if (user.length > 0) {
            console.log(`Cannot create user ${req.body.id} already exists`);
            res.status(400).send("Username already exists.");
        } else {
            console.log(`Creating user ${req.body.id}`);
            const user = new User({
                _id: req.body.id,
                name: req.body.name,
                date: Date.now(),
                profilePic: req.body.profilePic,
            });

            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                // Store hash in your password DB.
                user.password = hash;
                user.save()
                .catch(err => {
                    res.send("Error: " + err);
                    console.log(err);
                });
                res.status(200).send("User created.");
            });
        }
    });
})

module.exports = router;

