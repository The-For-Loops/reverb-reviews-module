const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
.route('/allProducts')
.get(controller.getAllProducts)

module.exports = router;