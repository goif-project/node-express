var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
var query = 'SELECT * from total_score ORDER BY total_score_id desc';
var query2 = 'SELECT * from total_score ORDER BY score desc LIMIT 3';
/* GET home page. */
// setInterval(function() {
//   console.log("hoge");
// }, 1000);

router.get('/', function(req, res, next) {
  connection.query(query, function(err, rows) {
    connection.query(query2, function(err, rows2) {
      res.render('rank', {
        title: 'ランキング',
        List: rows,
        Rank: rows2
      });
    });
  });
});

router.post('/', function(req, res, next) {
  var score = req.body.score;
  var user_name = req.body.user_name;
  var query = 'INSERT INTO total_score (score, user_name) VALUES ("' + score + '", ' + '"' + user_name + '")';
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
});

module.exports = router;
