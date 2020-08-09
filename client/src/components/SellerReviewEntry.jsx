import React from 'react';
import faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';


class SellerReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {

    let reviewMap = this.props.reviews.map((review) => (
      <div key={review.id}>
        <div className="seller-individual">
          <li>
          <StarRatingComponent
          name="rate1"
          starCount={5}
          value={review.rating}
        />
          <br></br>
            {review.rating}
            <br></br>
            {review.reviewer}
            <br></br>
            {review.content}
          </li>
        </div>
      </div>
    ))

    return (
      <ul>
        {reviewMap}
      </ul>
    )
  }
}


export default SellerReviewEntry;