const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
.route('/allProducts')
.get(controller.getAllProducts)


router
.route('/productReviews')
.get(controller.getProductReviews)


router
.route('/sellerReviews')
.get(controller.getSellerReviews)



module.exports = router;