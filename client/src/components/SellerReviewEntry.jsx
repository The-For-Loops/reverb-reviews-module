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
        <div className="seller-review-individual">
          {/* <li> */}
            <div>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={review.rating}
              /></div>
            <a className="seller-review-item">{review.item}</a>
            {review.reviewer} - {faker.date.between('2015-01-01', '2015-01-05').toString()}
            <p></p>
            {review.content}
          {/* </li> */}
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