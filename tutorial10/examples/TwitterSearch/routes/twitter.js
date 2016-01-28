var express = require('express');
var router = express.Router();
var config = require('../config/config.private');
var Twitter = require('twitter');



var twitterClient = new Twitter(config.twitter);

/* GET home page. */
router.get('/', function (req, res) {
    var searchTerm;
    if (req.query.q && req.query.q.length > 0) {
        searchTerm = req.query.q;
    }
    else {
        searchTerm = 'MMN'
    }

    twitterClient.get('search/tweets', {
        q: searchTerm
    }, function (error, docs) {
        if(!error){
            res.json({
                status : 'success',
                tweets : docs.statuses,
                message : 'fetched Tweets'
            });
        }
        else{
            res.json({
                status : 'error',
                message : error
            })
        }
    })
});


module.exports = router;
