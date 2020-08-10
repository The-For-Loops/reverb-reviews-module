const db = require('./index.js');
const faker = require('faker');

//====================PRODUCTS=========================
let brand = ['Fender', 'Gibson', 'Dean', 'Schecter', 'Epiphone', 'Squier', 'Paul Reed Smith', 'Ibanez', 'Gretsch', 'Music Man', 'Charvel', 'Gretsch'];

let model = ['Stratocaster', 'Telecaster', 'Les Paul', 'SG', 'Jazzmaster', 'Jaguar', 'Deluxe', 'Silver Jet']

let spec = ['Vintage', 'Special', 'Flame Top', 'Solid Body', 'Hollow Body', 'Mahogany', 'Sunburst', 'Standard', 'Fixed Bridge', 'Sparkle']


let createProduct = () => {
  let product = {};
  product.item = `${brand[Math.floor(Math.random() * Math.floor(brand.length))]} ${model[Math.floor(Math.random(model.length) * Math.floor(4))]} ${spec[Math.floor(Math.random() * Math.floor(spec.length))]}`;

  return product
};

let createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 101; i++){
    productsArr.push(createProduct())
  }
  return productsArr
};

let insertProducts = function() {
  let newProdsArr = createProducts();

  newProdsArr.map((product) => {
    db.query(`INSERT INTO products (item) VALUES ("${product.item}")`)
  })

};

insertProducts();


// ===============PRODUCT REVIEWS=============================


let createReviewProduct = () => {
  let review = {};
  review.reviewer = `${faker.name.findName()}`;
  review.title = `${faker.lorem.sentence()}`;
  review.rating = `${(Math.random() * 5).toFixed(2)}`;
  review.content = `${faker.lorem.paragraph()}`;
  review.helpful = `${Math.floor(Math.random() * 10)}`;
  review.avatar = `${"https://static.reverb-assets.com/assets/avatars/default-12200bad002dac7468972d9abe4d189bb04815943e33f3d1ea7d8788266624b9.jpg"}`;
  review.product_id = `${Math.floor(Math.random() * 100) + 1}`;

  return review
};

let createReviews = () => {
  let reviewsArr = [];
  for(let i = 0; i < 1000; i++){
    reviewsArr.push(createReviewProduct());
  }
  return reviewsArr;
};

let insertReviews = function() {
  let newReviewsArr = createReviews();

  newReviewsArr.map((review) => {
    db.query(`INSERT INTO productReviews (reviewer, title, rating, content, helpful, avatar, product_id) VALUES ("${review.reviewer}", "${review.title}", ${review.rating}, "${review.content}", ${review.helpful}, "${review.avatar}", ${review.product_id})`)
  })

};

insertReviews();


//====================SELLER REVIEWS ============================


let createSellerReview = () => {

  let sellReview = {};

  sellReview.item = `${brand[Math.floor(Math.random() * Math.floor(brand.length))]} ${model[Math.floor(Math.random(model.length) * Math.floor(4))]} ${spec[Math.floor(Math.random() * Math.floor(spec.length))]}`;
  sellReview.rating = `${(Math.random() * 5).toFixed(2)}`;
  sellReview.content = `${faker.lorem.sentences(sentence_count = 2)}`;
  sellReview.product_id = `${Math.floor(Math.random() * 100) + 1}`;
  sellReview.reviewer = `${faker.name.findName()}`;

  return sellReview
};

let createSellerReviews = () => {
  let sellerReviewsArr = [];
  for(let i = 0; i < 1000; i++){
    sellerReviewsArr.push(createSellerReview());
  }
  return sellerReviewsArr;
};

let insertSellerReviews = function() {
  let newSellerReviewsArr = createSellerReviews();

  newSellerReviewsArr.map((sellReview) => {
    db.query(`INSERT INTO sellerReviews (item, rating, content, product_id, reviewer) VALUES ("${sellReview.item}", ${sellReview.rating}, "${sellReview.content}", ${sellReview.product_id}, "${sellReview.reviewer}")`)
  })

};

insertSellerReviews();

