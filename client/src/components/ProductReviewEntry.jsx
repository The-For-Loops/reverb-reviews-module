import React from 'react';
import faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';
// import ReadMoreReact from 'read-more-react';
import ShowMore from "react-simple-show-more";

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
      <div key={review.id} className="seller-individual">
            <img src={review.avatar} className="avatar-container"/>
            <div>
              {faker.name.firstName()} {} {faker.name.lastName()[0]}.

                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={review.rating}
                  emptyStarColor={"grey"}
                // emptyStarColor="#ffb400"
                /><span style={{ color: '#f6870f', fontWeight: 'bold' }}>Verified Purchase</span>

            </div>
            {review.title}
            <p></p>

            <span>
              <ShowMore
                text={review.content}
                length={170}
                showMoreLabel=" read more"
                showLessLabel=" collapse"
                tag="a"
                className="text-blue"
                ellipsis="..."
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                }}
                enabled
              />
              </span>
            <br></br>
            {review.helpful} people found this helpful

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