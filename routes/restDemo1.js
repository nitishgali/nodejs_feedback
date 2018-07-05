var express = require('express');
//var mysql = require('mysql');
//var orm = require('orm');
var router = express.Router();
//var mysqlDB = require('/home/maddy/myapp/config/mysqlConfig');
/* GET home page. */
//var propertiesReader = require('properties-reader');
//var properties = propertiesReader("/home/maddy/myapp/config/app.properties");
//var driver = properties.get('mysql.driver');
//var db = properties.get('mysql.database');

router.get('/quizzes1/:id?', function (req, res, next) {
   // res.render('index', { title: 'Express' });
 var id = req.params.id;
 console.log(id);



   req.models.feedback.get(id, function (error,feedback) {
        if (error) throw error;
        res.send(feedback);
    });
   //console.log(req.prototype.mysqlDB);
   //res.send("test");
});

module.exports = router;
