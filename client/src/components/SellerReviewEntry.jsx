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
            emptyStarColor={"#FFF0DA"}
          />
          <a className="seller-review-item">{review.item}</a>
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
        <br></br>
        {review.content}
        {/* </li> */}
      </div>

    ))

    return (
      <div>
        {reviewMap}
      </div>
    )
  }
}


export default SellerReviewEntry;