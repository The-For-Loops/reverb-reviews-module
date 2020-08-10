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
    const divStyle = {
      height: '50px',
      width: '50px'
    }

    let reviewMap = this.props.reviews.map((review) => (
      <div key={review.id}>
        <div className="seller-individual">
          <li>
            <div className="avatar-container"><img src={review.avatar} className="avatar-container"/></div>
            <div>
              {faker.name.firstName()} {} {faker.name.lastName()[0]}.

                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={review.rating}
                // emptyStarColor="#ffb400"
                /><span style={{ color: '#f6870f' }}>Verified Purchase</span>

            </div>
            {review.title}

            {review.content}
            <br></br>
            {review.helpful} people found this helpful
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