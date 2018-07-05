var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
 //res.sendFile("/home/maddy/myapp/chatdemo.html")
});

module.exports = router;
