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

      <div className="seller-review-individual" key={review.id}>
        {/* <li> */}
        <div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={review.rating}
          />
          <a className="seller-review-item">{review.item}</a>
          {review.reviewer} - {faker.date.between('2015-01-01', '2015-01-05').toString()}
        </div>
        <br></br>
        {review.content}
        {/* </li> */}
      </div>

    ))

    return (
      <div className="review-seller-individual">
        {reviewMap}
      </div>
    )
  }
}


export default SellerReviewEntry;