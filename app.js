const express = require('express');

const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/api/users', userRoute);

module.exports = app;