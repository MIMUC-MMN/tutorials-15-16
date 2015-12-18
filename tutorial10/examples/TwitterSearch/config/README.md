# Config Module #

We suggest you create a file config.private.js and put your stuff in there. That way you will prevent 
pushing your credentials to the GIT repository.

Example for a config.private.js: 

``` javascript

var config = {
    twitter : {
        consumer_key: 'Your consumer key',
        consumer_secret: 'Your consumer secret',
        access_token_key: 'Your access token',
        access_token_secret: 'Your access token secret'
    }
};

module.exports = config;

```