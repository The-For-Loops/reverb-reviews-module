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

    let reviewMap = this.props.reviews.map((review) => (
      <div key={review.id} className="seller-review-individual">

        <div className="product-user">
          <img src={review.avatar} className="avatar-container" />
          <div style={{ fontWeight: 'bold' }}>{faker.name.firstName()} {} {faker.name.lastName()[0]}.</div>
        </div>

        <div className="product-main">
          <div style={{ fontWeight: 'bold' }}>
            {review.title}
          </div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={review.rating}
            emptyStarColor={"grey"}
          // emptyStarColor="#ffb400"
          /> {} {} {}
          <span style={{ color: '#f6870f', fontWeight: 'bold' }}>Verified Purchase</span>
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
          <p></p>
          {review.helpful} people found this helpful
          </div>
      </div>


    ))

    return (
      <div>
        <div>
        <ul>
          {reviewMap}
        </ul>
        <p></p>
        </div>
        <div className="page-numbers-container">
          <ul>
            <li className="page-number">
              <a className="page-number-selected">
                1
              </a>
            </li>
            <li className="page-number">
              <a className="page-number-after">
                2
              </a>
            </li>
            <li className="page-number">
              <a className="page-number-after">
                3
              </a>
            </li>
            <li className="page-number">
              <a className="page-number-after">
                4
              </a>
            </li>
            <li className="page-number">
              <a className="page-number-after">
                Next
              </a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default ProductReviewEntry;