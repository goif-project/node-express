var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT * from total_score ORDER BY total_score_id desc';
  var query2 = 'SELECT * from total_score ORDER BY score desc LIMIT 3';
  connection.query(query, function(err, rows) {
    connection.query(query2, function(err, rows2) {
      res.render('tsts', {
        title: '名前・スコア入力',
        List: rows,
        Rank: rows2
      });
    });
  });
});

router.post('/', function(req, res, next) {
  // var score = req.body.score;
  // var user_name = req.body.user_name;
  // var query = 'INSERT INTO total_score (score, user_name) VALUES ("' + score + '", ' + '"' + user_name + '")';
  // console.log("あああああ");
  // connection.query(query, function(err, rows) {
  //   res.redirect('/tsts/');
  // });
});

module.exports = router;
