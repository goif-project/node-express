var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('rank', {
    title: 'HOME GOLF -RANK-'
  });
});

module.exports = router;
