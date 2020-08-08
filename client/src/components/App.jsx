import React from 'react';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    var reviewer = faker.name.findName();
    var title = faker.lorem.sentence();
    var rating = (Math.random() * 5).toFixed(2);
    var content = faker.lorem.paragraph();
    var helpful = Math.floor(Math.random() * 10);
    var avatar = "https://static.reverb-assets.com/assets/avatars/default-12200bad002dac7468972d9abe4d189bb04815943e33f3d1ea7d8788266624b9.jpg"
    var product_id = Math.floor(Math.random() * 100);



    return (
      <div>
        {reviewer}<br></br>
        {title}<br></br>
        {rating}<br></br>
        {content}<br></br>
        {helpful}<br></br>
        {product_id}<br></br>
        <img src={avatar} />



      </div>
    )
  }
}

export default App;