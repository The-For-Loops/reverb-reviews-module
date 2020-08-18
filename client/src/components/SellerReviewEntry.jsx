import React from 'react';
import faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';


class SellerReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: 1
    }
    this.pageNumSlicer = this.pageNumSlicer.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);

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

      <div className="seller-review-individual" key={review.id}>
        <div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={review.rating}
            emptyStarColor={"#FFF0DA"}
          />
          <a className="seller-review-item">{review.item}</a>
          <div className="seller-reviewer-name-date">
            {review.reviewer} - {faker.date.month().toString()} {}
            {faker.random.number({
              'min': 1,
              'max': 28
            }).toString()}, {}
            {faker.random.number({
              'min': 2010,
              'max': 2020
            }).toString()}
          </div>
        </div>
        <br></br>
        {review.content}
      </div>
    ))

    return (
      <div>
        <div>
          {reviewMap}
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


export default SellerReviewEntry;