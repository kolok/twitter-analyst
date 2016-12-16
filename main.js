require('dotenv').config();

var app = require('./app/server');

app.listen(8080, function(){
    console.log('Server is up and running!');
    console.log('');
    console.log('');
    console.log('Check to make sure keys are being pulled from .env file');
    console.log('CONSUMER_KEY', process.env.CONSUMER_KEY);
    console.log('CONSUMER_SECRET', process.env.CONSUMER_SECRET);
    console.log('ACCESS_TOKEN_KEY', process.env.ACCESS_TOKEN_KEY);
    console.log('ACCESS_TOKEN_SECRET', process.env.ACCESS_TOKEN_SECRET);
});
