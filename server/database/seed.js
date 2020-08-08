const db = require('./index.js');


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

insertProducts();





