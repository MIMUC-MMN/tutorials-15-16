var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    /*
    Question: What will be logged first?
     */



    var users = req.db.get('users');
    users.find({},function(e,docs){
        console.log("I found some users.");
    });
    console.log("I'm feeling quizzical.");
    res.send("Whoop whoop");
});

router.get('/spottheerror',function(req,res){
    req.db.get('users').find({},function(e,docs){
         res.send("Now I have some data");
    });
    res.send("Ok, request received");
});

module.exports = router;
