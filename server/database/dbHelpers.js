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

  getProductReviews: (req, callback) => {
    let { id } = req.params;
    let queryStr = `SELECT * FROM productReviews WHERE productReviews.product_id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        // only send back 100 at a time
        // request should contain page number
        // if no page number, send first 100
        // else send page number * 100

        callback(null, results);
      }
    })
  },

  getSellerReviews: (req, callback) => {
    let { id } = req.params;
    let queryStr = `SELECT * FROM sellerReviews WHERE sellerReviews.product_id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },



}