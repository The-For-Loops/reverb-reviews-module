const express = require('express');
const app = express();
const port = 4003;
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, '../client/dist')))
app.use('/api/reviews', router);




app.listen(port);