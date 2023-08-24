var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pagename: 'Home',
    title: 'Welcome',
    home: true
  });
});

module.exports = router;
