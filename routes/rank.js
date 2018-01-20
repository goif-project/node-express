var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
//1~10位までの順位を取得するsql文
var rank1_query = 'SELECT * from total_score ORDER BY score desc LIMIT 10';
//11~50位までの順位を取得するsql文
var rank2_query = 'SELECT * from total_score ORDER BY score desc LIMIT 10,40';
//100位までの順位を取得するsql文
var rank3_query = 'SELECT * from total_score ORDER BY score desc LIMIT 100,1';
//200位までの順位を取得するsql文
var rank4_query = 'SELECT * from total_score ORDER BY score desc LIMIT 200,1';


router.get('/', function(req, res, next) {
  connection.query(rank1_query, function(err, rows1) {
    connection.query(rank2_query, function(err, rows2) {
      connection.query(rank3_query, function(err, rows3) {
        connection.query(rank4_query, function(err, rows4) {
          res.render('rank', {
            title: 'HOME GOLF -RANK-',
            Rank1: rows1,
            Rank2: rows2,
            Rank3: rows3,
            Rank4: rows4
          });
        });
      });
    });
  });
});

module.exports = router;
