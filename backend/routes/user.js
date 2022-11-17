const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    console.log('Create User GET /');
    res.send('in user');
})

router.get('/test', (req, res) => {
    console.log('Create User GET /test');
    res.send('in user test');
})

router.post('/create', (req, res) => {
    console.log(req.body);
    
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        id: req.body.id,
    });

    user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
})


module.exports = router;