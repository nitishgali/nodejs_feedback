var express = require('express');
//var mysql = require('mysql');
//var orm = require('orm');
var router = express.Router();
//var mysqlDB = require('/home/maddy/myapp/config/mysqlConfig');
/* GET home page. */
var propertiesReader = require('properties-reader');
var properties = propertiesReader("/home/maddy/myapp/config/app.properties");
var driver = properties.get('mysql.driver');
var db = properties.get('mysql.database');

router.get('/quizzes', function (req, res, next) {
   // res.render('index', { title: 'Express' });
 //var num = req.params.username;
 //console.log(num);
   req.prototype.mysqlDB.query('SELECT * FROM feedback ORDER BY dt DESC', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
   //console.log(req.prototype.mysqlDB);
   //res.send("test");
});

router.get('/getontype/:id?',function(req,res,next)
{
    var num = req.params.id;
    console.log(num);
    if(num==1)
   {
    	req.prototype.mysqlDB.query("SELECT * FROM feedback WHERE feedback.feedbacktype LIKE ? ORDER BY dt DESC",['comments'],function(err,feedback)
    	{
           if(err) throw err;
           res.send(feedback);
    	});
    }
    else if(num==2)
   {
    	req.prototype.mysqlDB.query("SELECT * FROM feedback WHERE feedback.feedbacktype LIKE ? ORDER BY dt DESC",['bug reports'],function(err,feedback)
    	{
           if(err) throw err;
           res.send(feedback);
    	});
    }
    else if(num==3)
    {
       req.prototype.mysqlDB.query("SELECT * FROM feedback WHERE feedback.feedbacktype LIKE ? ORDER BY dt DESC",['Questions'],function(err,feedback)
    	{
           if(err) throw err;
           res.send(feedback);
    	});	
    }
});


module.exports = router;
