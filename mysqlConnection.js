var mysql = require('mysql');

var dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'jack50611',
  database: 'bulletin_board'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
