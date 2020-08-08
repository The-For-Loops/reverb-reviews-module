const db = require('./index.js');
const faker = require('faker');

//====================PRODUCTS=========================
const brand = ['Fender', 'Gibson', 'Dean', 'Schecter', 'Epiphone', 'Squier', 'Paul Reed Smith', 'Ibanez', 'Gretsch', 'Music Man', 'Charvel', 'Gretsch'];

const model = ['Stratocaster', 'Telecaster', 'Les Paul', 'SG', 'Jazzmaster', 'Jaguar', 'Deluxe', 'Silver Jet']

const spec = ['Vintage', 'Special', 'Flame Top', 'Solid Body', 'Hollow Body', 'Mahogany', 'Sunburst', 'Standard', 'Fixed Bridge', 'Sparkle']


const createProduct = () => {
  let product = {};
  product.item = `${brand[Math.floor(Math.random() * Math.floor(brand.length))]} ${model[Math.floor(Math.random(model.length) * Math.floor(4))]} ${spec[Math.floor(Math.random() * Math.floor(spec.length))]}`;

  return product
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 100; i++){
    productsArr.push(createProduct())
  }
  return productsArr
};

const insertProducts = function() {
  // Complete me please
  let newProdsArr = createProducts();

  newProdsArr.map((product) => {
    db.query(`INSERT INTO products (item) VALUES ("${product.item}")`)
  })

};

// insertProducts();


// ===============PRODUCT REVIEWS=============================

var reviewer = faker.name.findName();
var title = faker.lorem.sentence();
var rating = (Math.random() * 5).toFixed(2);
var content = faker.lorem.paragraph();
var helpful = Math.floor(Math.random() * 10);
var avatar = "https://static.reverb-assets.com/assets/avatars/default-12200bad002dac7468972d9abe4d189bb04815943e33f3d1ea7d8788266624b9.jpg"
var product_id = Math.floor(Math.random() * 100);

const createReviewProduct = () => {
  let review = {};
  review.reviewer = `${faker.name.findName()}`;
  review.title = `${faker.lorem.sentence()}`;
  review.rating = `${(Math.random() * 5).toFixed(2)}`;
  review.content = `${faker.lorem.paragraph()}`;
  review.helpful = `${Math.floor(Math.random() * 10)}`;
  review.avatar = `${"https://static.reverb-assets.com/assets/avatars/default-12200bad002dac7468972d9abe4d189bb04815943e33f3d1ea7d8788266624b9.jpg"}`;
  review.product_id = `${Math.floor(Math.random() * 100)}`;

  return review
};

const createReviews = () => {
  let reviewsArr = [];
  for(let i = 0; i < 600; i++){
    reviewsArr.push(createReviewProduct());
  }
  return reviewsArr;
};

const insertReviews = function() {
  // Complete me please
  let newRewviewsArr = createReviews();

  newRewviewsArr.map((review) => {
    db.query(`INSERT INTO productReviews (reviewer, title, rating, content, helpful, avatar, product_id) VALUES ("${review.reviewer}", "${review.title}", ${review.rating}, "${review.content}", ${review.helpful}, "${review.avatar}", ${review.product_id})`)
  })

};

insertReviews();





