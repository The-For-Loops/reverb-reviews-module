const db = require('./index.js');

module.exports = {

  getAllProducts: (callback) => {
    let queryStr = `SELECT * FROM productReviews WHERE productReviews.product_id = 10`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }

}