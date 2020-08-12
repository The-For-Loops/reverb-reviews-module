import React from 'react';
import faker from 'faker';
import ProductReviews from './ProductReviews.jsx';
import SellerReviews from './SellerReviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get(`/api/allProducts/`)
    .then((results) => {
      this.setState({
        products: results.data
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {

    var rating = (Math.random() * 5).toFixed(2);
    var sellDate = faker.date.between('2010-01-01', '2020-01-05');
    var content = faker.lorem.sentence();
    var product_id = Math.floor(Math.random() * 100);
    var reviewer = faker.name.findName();



    return (
      <div className="review-main-container">
        <div className="review-main-content">
          {<SellerReviews />}
          {/* <p></p>
          {<ProductReviews products={this.state.products} />}<br></br> */}
        </div>
        <div className="review-sidebar">
        </div>
      </div>
    )
  }
}

export default App;