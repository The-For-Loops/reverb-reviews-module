import React from 'react';
import faker from 'faker';
import ProductReviews from './ProductReviews.jsx';
import SellerReviews from './SellerReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    var rating = (Math.random() * 5).toFixed(2);
    var sellDate = faker.date.between('2010-01-01', '2020-01-05');
    var content = faker.lorem.sentence();
    var product_id = Math.floor(Math.random() * 100);
    var reviewer = faker.name.findName();



    return (
      <div>
        {<ProductReviews />}<br></br>
        {<SellerReviews />}
      </div>
    )
  }
}

export default App;