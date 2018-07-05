var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    res.render('index',{items:resultArray});
});*/

/*router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  res.redirect('/');
});*/

/*router.post('/update', function(req, res, next) {
  var id = req.body.id;

 
  res.redirect('/');
});*/

/*router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  res.redirect('/');
});
*/
module.exports = router;