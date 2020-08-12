import React from 'react';
import axios from 'axios';
import faker from 'faker';
import SellerReviewEntry from './SellerReviewEntry.jsx';
import StarRatingComponent from 'react-star-rating-component';

class SellerReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropClicked: false,
      product_id: 3,
      reviews: []

    }

    this.toggleDrop = this.toggleDrop.bind(this);
    this.displayReviews = this.displayReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);

  }

  componentDidMount() {
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
        <div>{<SellerReviewEntry reviews={this.state.reviews}/>}
        <button>View all reviews</button></div>
      )
  }

  getReviews() {
    axios.get(`/api/sellerReviews/${this.state.product_id}`)
    .then((results) => {
      this.setState({
        reviews: results.data
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }


  render() {

    return (
      <div>
        <div onClick={this.toggleDrop} className="seller-review-container" >
          <h3>Seller Reviews <StarRatingComponent
                name="rate1"
                starCount={5}
                value={5}
              /> (18,738)</h3><br></br>
          </div>
          <div>{this.displayReviews()}</div>
      </div>
    )
  }
}

export default SellerReviews;