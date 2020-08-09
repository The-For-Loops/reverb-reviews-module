const dbHelpers = require('./database/dbHelpers.js');

module.exports = {

  getAllProducts: (req, res) => {
    dbHelpers.getAllProducts((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  },

  getProductReviews: (req, res) => {
    dbHelpers.getProductReviews(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  },

  getSellerReviews: (req, res) => {
    dbHelpers.getSellerReviews(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  },









}