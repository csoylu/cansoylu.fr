const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json({limit: '20mb'}));

//ROUTES
app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Hello World');
})

//IMPORT ROUTES
const userRoute = require('./routes/user');
app.use('/user', userRoute);

const postRoute = require('./routes/post');
app.use('/post', postRoute);

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB');
})

//LISTEN
app.listen(8080, console.log("Server is running on port 8080"));