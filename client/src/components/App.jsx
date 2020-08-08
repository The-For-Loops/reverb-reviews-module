import React from 'react';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    var content = faker.lorem.word;


    return (
      <div>
        {randomName}<br></br>
        {randomEmail}<br></br>
        {content}
      </div>
    )
  }
}

export default App;