var twitter = require('twitter');

/*var client = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});*/

var client = new twitter({
    consumer_key: 'n4DgasIRUpX2fq6QH5S7bgSiu',
    consumer_secret: 'PkH4r6mfZ9LBywkmeJXk8zXsWJK2uVeb4SUWswUoT8obv7PXVc',
    access_token_key:	'1096018525-wUbRgRg37PCZUUAZikT9cZwAQsIOS7GZeeeTkoX',
    access_token_secret: '4LVMEuuHbEPmSm49yukr5vY8mEZsmNLDLyMmiwCmN47nx'
});

module.exports = client;
