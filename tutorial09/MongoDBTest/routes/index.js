var express = require('express');
var router = express.Router();

var quiz = require('./quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongo DB Demo' });
});

router.use('/quiz',quiz);

module.exports = router;
