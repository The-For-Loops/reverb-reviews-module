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

    let helpfulText = "found this helpful"

    let reviewMap = this.props.reviews.map((review) => (
      <div key={review.id} className="product-review-individual">

        <div className="product-user">
          <div style={{ width: '100px', textAlign: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <img src={review.avatar} className="avatar-container" />
          </div>
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
            emptyStarColor={"#FFF0DA"}
          // emptyStarColor="#ffb400"
          /> {} {} {}
          <span style={{ color: '#f6870f', fontWeight: 'bold' }}>Verified Purchase</span>
          <p>
            {/* <span> */}
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
          </p>
          {/* </span> */}
          {/* <br></br>
          <p></p> */}
          <div className="helpful-text">
            {review.helpful} {helpfulText}
          </div>
        </div>
      </div>


    ))

    return (
      <div>
        <div>
          <ul>
            {reviewMap}
          </ul>
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
                Next >
              </a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default ProductReviewEntry;