var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/checkin', function(req, res, next) {
	res.render('checkin', {});
});

router.get('/page1', function(req, res, next) {
	res.render('page1', {});
});

router.get('/page2', function(req, res, next) {
	res.render('page2', {});
});


module.exports = router;
