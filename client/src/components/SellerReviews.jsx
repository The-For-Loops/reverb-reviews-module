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
      }, () => console.log(this.state.reviews))
    })
    .catch((err) => {
      console.error(err)
    })
  }


  render() {

    return (
      <div className={!this.state.dropClicked ? "seller-container-collapsed" : "seller-container-toggled"} onClick={this.toggleDrop}>
        <div>
          <h3>Seller Reviews <StarRatingComponent
                name="rate1"
                starCount={5}
                value={5}
              /> (18,738)</h3><br></br>
          <div>{this.displayReviews()}</div>
          </div>
      </div>
    )
  }
}

export default SellerReviews;