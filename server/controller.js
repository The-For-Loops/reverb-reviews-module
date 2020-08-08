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
  }







}