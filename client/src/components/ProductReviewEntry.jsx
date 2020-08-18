import React from 'react';
import faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';
import ShowMore from "react-simple-show-more";

class ProductReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: 1
    }

    this.checksHelpful = this.checksHelpful.bind(this);
    this.pageNumSlicer = this.pageNumSlicer.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  checksHelpful(number) {
    if (number === 1) {
      return "person"
    } else {
      return "people"
    }
  }

  pageNumSlicer(array) {
    let n = this.state.pageNum;
    let min = (n - 1) * 5;
    let max = min + 5

    return array.slice(min, max)
  }

  nextPage() {
    if (this.state.pageNum < (this.props.reviews.length / 5)) {
      this.setState({
        pageNum: this.state.pageNum + 1
      })
    }
  }

  prevPage() {
    if (this.state.pageNum > 1) {
      this.setState({
        pageNum: this.state.pageNum - 1
      })
    }
  }

  render() {

    let reviewMap = this.pageNumSlicer(this.props.reviews).map((review) => (
      <div key={review.id} className="product-review-individual">
        <div className="product-user">
          <div style={{ width: '100px', textAlign: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <img src={review.avatar} className="avatar-container" />
          </div>
          <div style={{ fontWeight: 'bold' }}>{review.reviewer}</div>
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
          /> {} {} {}
          <span style={{ color: '#f6870f', fontWeight: 'bold' }}>Verified Purchase</span>
          <p>
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
          <div className="helpful-text">
            {review.helpful + " " + this.checksHelpful(review.helpful) + " found this helpful"}
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
            <li className={this.state.pageNum === 1 ? "page-number-limit" : "page-number"}>
              <a className="page-number-after" onClick={this.prevPage}>
                Previous
              </a>
            </li>
            <li className={this.state.pageNum > this.props.reviews.length / 5 ? "page-number-limit" : "page-number"}>
              <a className="page-number-after" onClick={this.nextPage}>
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