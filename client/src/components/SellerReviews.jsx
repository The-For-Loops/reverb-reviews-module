import React from 'react';
import faker from 'faker';

class SellerReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropClicked: false

    }

    this.toggleDrop = this.toggleDrop.bind(this);

  }

  toggleDrop() {
    this.setState({
      dropClicked: !this.state.dropClicked
    })
  }

  render() {

    return (
      <div className= {!this.state.dropClicked ? "seller-container-collapsed" : "seller-container-toggled"} onClick={this.toggleDrop}>
        <h3>Seller Reviews</h3>
      </div>
    )
  }
}

export default SellerReviews;