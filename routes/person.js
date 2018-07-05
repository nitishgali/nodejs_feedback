var express = require('express');
var router = express.Router();
var date = require('date-and-time');
router.post('/save', function (req, res, next) {
   var now = new Date();
var now1 = date.format(now,'YYYY-MM-DD HH:MM:SS');
//console.log(now1+"jjssjs"); 
  var intialstatus = "open";  
   req.body.dt = now1;
    personObj = req.body;
    req.body.feedbackstatus = intialstatus;
   // personObj.dt = now1;
    req.models.feedback.create([
        personObj
    ], function (err, items) {
       if(err) throw err;
        console.log(items[0].id);
         res.json(items[0].id);
    });
});



module.exports = router;
