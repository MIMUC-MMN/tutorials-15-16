var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/a-route/sub-route', function(req,res){
  res.send('You are on a sub-route, young Padawan.')
});

module.exports = router;
