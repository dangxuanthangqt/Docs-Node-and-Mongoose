var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ketqua*', function(req, res, next) {
  var query_email = req.query.email;
  console.log(query_email);
  res.render('ketqua', { query_email: query_email});
});

module.exports = router;
