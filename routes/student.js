var express = require('express');
var router = express.Router();
var studentInfo = [];

/* POST student */
router.post('/create', function(req, res, next) {
	studentInfo.push(req.body);
	res.send(studentInfo);
});



/* GET students listing. */
router.get('/:id?', function(req, res, next) {
	var num = req.params.id;
       console.log(num);
	for (let i = 0; i < studentInfo.length; i++) {
		var element = studentInfo[i].id;

		if(element == num)
		{
			res.send(studentInfo[i]);
		}
	}
});


router.delete('/delete/:id?', function(req, res, next) {
	var num = req.params.id;

	for (let i = 0; i < studentInfo.length; i++) {
		var element = studentInfo[i].id;

		if(element == num)
		{
			studentInfo.splice(i,1);
			res.send(studentInfo);
		}
	}
});

router.put('/update/:id?', function(req, res, next) {
	var num = req.params.id;

	for (let i = 0; i < studentInfo.length; i++) {
		var element = studentInfo[i].id;

		if(element == num)
		{
			studentInfo[i] = req.body;
			res.send(studentInfo);
		}
	}
});


module.exports = router;
