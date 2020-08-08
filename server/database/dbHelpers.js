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
  },

  getProductReviews: (callback) => {
    let queryStr = `SELECT * FROM productReviews`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getSellerReviews: (callback) => {
    let queryStr = `SELECT * FROM sellerReviews`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },



}