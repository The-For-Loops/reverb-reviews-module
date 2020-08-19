import React from 'react';
import faker from 'faker';
import axios from 'axios';
import ProductReviewEntry from './ProductReviewEntry.jsx';
import StarRatingComponent from 'react-star-rating-component';
import Modal from './Modal.jsx';



class ProductReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropClicked: false,
      product_id: 10,
      reviews: [],
      products: [],
      showModal: false
    }
    this.toggleDrop = this.toggleDrop.bind(this);
    this.displayReviews = this.displayReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

  }


  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
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
          <Modal showModal={this.state.showModal} toggleModal={this.toggleModal} />
          <div className="write-review-text">
            <span>Help another musician by sharing your experience!</span><button className="button-write-review" onClick={this.toggleModal}>Write a Product Review</button>
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
              <div className="container-header">
                <h3>Reviews of the {this.state.products[this.state.product_id].item}
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={5}
                    emptyStarColor={"#eee"}
                  /> ({this.state.reviews.length})</h3>
              </div>
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