var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var currentDate = new Date();
    //answer with a JSON
    res.json({
        date : currentDate,
        millis : currentDate.getTime()
    });
});

module.exports = router;
