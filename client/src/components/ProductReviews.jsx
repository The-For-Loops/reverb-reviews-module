import React from 'react';
import faker from 'faker';
import axios from 'axios';
import ProductReviewEntry from './ProductReviewEntry.jsx';
import StarRatingComponent from 'react-star-rating-component';
import ModalLogin from './Modal.jsx';



class ProductReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropClicked: false,
      product_id: 10,
      reviews: [],
      products: []
    }
    this.toggleDrop = this.toggleDrop.bind(this);
    this.displayReviews = this.displayReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProducts = this.getProducts.bind(this);

  }



  componentDidMount() {
    this.getProducts();
    this.getReviews();
  }

  toggleDrop() {
    this.setState({
      dropClicked: !this.state.dropClicked
    })
  }

  displayReviews() {
    if (this.state.dropClicked)
      return (
        <div>
          <div>
            <ModalLogin />
          </div>
          <div className="seller-individual">{<ProductReviewEntry products={this.state.products} reviews={this.state.reviews} />}
          </div >
        </div>
      )
  }

  getReviews() {
    axios.get(`/api/productReviews/${this.state.product_id}`)
      .then((results) => {
        this.setState({
          reviews: results.data
        })
      })
      .catch((err) => {
        console.error(err)
      })
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
    {
      if (this.state.products.length) {
        return (

            <div className={!this.state.dropClicked ? "review-container-collapsed" : "review-container-toggled"}>
              <div className={!this.state.dropClicked ? "review-header" : "review-header-toggled"} onClick={this.toggleDrop}>

                <span><h3>Reviews of the {this.state.products[this.state.product_id].item}
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={5}
                    emptyStarColor={"#eee"}
                  /> (62)</h3></span>


              </div>
              {this.displayReviews()}
            </div>


        )
      }
    }
    return ('')


  }
}

export default ProductReviews;