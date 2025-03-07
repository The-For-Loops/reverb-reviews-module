import React from 'react';
import axios from 'axios';
import ProductReviewEntry from './ProductReviewEntry.jsx';
import StarRatingComponent from 'react-star-rating-component';
import Modal from './Modal.jsx';

class ProductReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropClicked: false,
      product_id: window.location.pathname.slice(1, -1),
      reviews: [],
      products: [],
      showModal: false
    }
    this.toggleDrop = this.toggleDrop.bind(this);
    this.displayReviews = this.displayReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getProductAverage = this.getProductAverage.bind(this);

  };

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  };

  componentDidMount() {
    this.getProducts();
    this.getReviews();
    this.getProductAverage();
  };

  toggleDrop() {
    this.setState({
      dropClicked: !this.state.dropClicked
    })
  };

  displayReviews() {
    if (this.state.dropClicked)
      return (
        <div>
          <Modal showModal={this.state.showModal} toggleModal={this.toggleModal} />
          <div className="write-review-text">
            <span>Help another musician by sharing your experience!</span><button className="button-write-review" onClick={this.toggleModal}>Write a Product Review</button>
          </div>
          <div className="seller-individual">{<ProductReviewEntry products={this.state.products} reviews={this.state.reviews} />}
          </div >
        </div>
      )
  };

  getReviews() {
    axios.get(`/api/reviews/productReviews/${this.state.product_id}`)
      .then((results) => {
        this.setState({
          reviews: results.data
        })
      })
      .catch((err) => {
        console.error(err)
      })
  };

  getProducts() {
    axios.get(`/api/reviews/allProducts`)
      .then((results) => {
        this.setState({
          products: results.data
        })
      })
      .catch((err) => {
        console.error(err)
      })
  };

  getProductAverage() {
    let total = 0;
    this.state.reviews.forEach((review) => {
      total += review.rating
      console.log('rating: ', review.rating)
    })


    console.log(total);
    return Math.floor((total / this.state.reviews.length));

  };

  render() {
    {
      if (this.state.products.length) {
        return (
          <div className={!this.state.dropClicked ? "review-container-collapsed" : "review-container-toggled"}>
            <div className={!this.state.dropClicked ? "review-header" : "review-header-toggled"} onClick={this.toggleDrop}>
              <div className="container-header">
                <h3>Reviews of the {this.state.products[this.state.product_id].item}
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.getProductAverage()}
                    emptyStarColor={"#FFF0DA"}
                  /> ({this.state.reviews.length})</h3>
              </div>
            </div>
            {this.displayReviews()}
          </div>
        )
      }
    }
    return ('')
  };
};

export default ProductReviews;