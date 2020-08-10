import React from 'react';
import faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';

class ProductReviewEntry extends React.Component {
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
            <div>
              {faker.name.firstName()} {} {faker.name.lastName()[0]}.
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={review.rating}
              />Verified Purchase</div>
            {review.title}<span>{review.reviewer}</span>

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

export default ProductReviewEntry;