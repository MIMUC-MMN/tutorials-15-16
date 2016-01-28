var express = require('express');
var router = express.Router();

var twitterRoute = require('./twitter');

router.use('/twitter',twitterRoute);

module.exports = router;
