var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // now we access the database collection 'users'
  var users = req.db.get('users');
  users.find({},function(e,docs){
    if(!e){
      // all we do is send back a JSON array containing all users.
      res.json(docs);
    }
    // this is how you use the error handler middleware that is registered in app.js
    // the next middleware function in the chain is called
    // usually if an error object was passed to the middleware, it jumps right to the error handler middleware.
    else{
      next(e);
    }
  });
});

module.exports = router;
