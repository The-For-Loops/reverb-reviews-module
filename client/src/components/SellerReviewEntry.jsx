import React from 'react';
import faker from 'faker';

class SellerReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {

    let reviewMap = this.props.reviews.map((review) => (
      <div key={review.id}>
        <li>
          {review.content}
          <br></br>
        </li>
        <br></br>
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