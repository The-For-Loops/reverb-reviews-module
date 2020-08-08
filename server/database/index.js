var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MSjdhjacknife55',
  database : 'FEC'
});

db.connect();

module.exports = db;