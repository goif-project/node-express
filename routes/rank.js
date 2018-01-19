var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
var rank1_query = 'SELECT * from total_score ORDER BY score desc LIMIT 10';
var rank2_query = 'SELECT * from total_score ORDER BY score desc LIMIT 10,40';

router.get('/', function(req, res, next) {
  connection.query(rank1_query, function(err, rows1) {
    connection.query(rank2_query, function(err, rows2) {
      res.render('rank', {
        title: 'HOME GOLF -RANK-',
        Rank1: rows1,
        Rank2: rows2
      });
    });
  });
});

module.exports = router;
