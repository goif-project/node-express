var mysql = require('mysql');

var dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'jack50611',
  database: 'golf_db'
};
//
// var dbConfig = {
//  host: 'mysql328.db.sakura.ne.jp',
//  user: 'mayomayooo',
//  password: '05110902postja',
//  database: 'mayomayooo_golf'
// };

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
