const db = require('./index.js');

module.exports = {

  getAllProducts: (callback) => {
    let queryStr = `SELECT * FROM products`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }

}