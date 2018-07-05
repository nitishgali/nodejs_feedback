var mysql = require('mysql');
var orm = require('orm');
var propertiesReader = require('properties-reader');
var properties = propertiesReader("./config/app.properties");

//models
var pm = require('/home/maddy/myapp/models/personModel');
//var pet = require('/home/niharika/expressapp/myapp/models/pet');
var mysqlDBUrl = "";
mysqlDBUrl = properties.get('mysql.driver') + ':' + '/' + '/' + properties.get('mysql.user') + ':' + properties.get('mysql.password') + '@' + properties.get('mysql.host') + '/' + properties.get('mysql.database');

//console.log("test url:" + mysqlDBUrl);


var mysqlCon = orm.express(mysqlDBUrl, {
    define: function (db, models, next) {
        
        console.log("connected");
        models.feedback = db.define("feedback", pm);
        //models.pet = db.define("pet",pet);
        //models.person.hasOne('owner', models.person, { reverse: 'pets' });
        db.syncPromise();
        console.log("connected to mysql,"+ mysqlDBUrl);
        next();
    }
});

// mysqlCon.on("connection", {

// });


module.exports = mysqlCon;
