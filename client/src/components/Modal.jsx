import React from 'react';


class Modal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isChecked: true
    }
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck(e) {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }



  render() {
    return (
      <div id="myModal" className={this.props.showModal ? 'openedModal' : 'closedModal'}>

        <div className="modal-content">
          <span className="close" onClick={this.props.toggleModal}>&times;</span>

          <div>
            <span>Sign Up</span> {}
            <span>Log In</span>
          </div>
          <div style={{ fontSize: '90%' }}>
            <span>Please log in or create a free account to write a product review</span>
          </div>
          <form>
            <div>
              <label>
                First name
            <input type="text" name="name" />
              </label>
            </div>
            <div>
              <label>
                Last name
            <input type="text" name="name" />
              </label>
            </div>
            <div>

              <label>
                Email
            <input type="text" name="name" />
              </label>
            </div>
            <div>

              <label>
                Email Confirmation
            <input type="text" name="name" />
              </label>
            </div>
            <div>
              <label>
                Password
            <input type="text" name="name" />
              </label>
            </div>
            <div>

              <input type="submit" value="Sign Up" />
            </div>

            <div>
              <p>
                <input type="checkbox" checked={this.state.isChecked} onChange={(e) => this.toggleCheck(e)} /> Get the latest news, deals, and promotions via email
            </p>
            </div>
            <div>

              <p>
                <input type="checkbox" checked={this.state.isChecked} onChange={(e) => this.toggleCheck(e)} />By clicking Sign Up, I expressly agree to accept Reverb’s Terms of Use and Privacy Policy - REQUIRED
            </p>
            </div>


          </form>

        </div>

      </div>
    )
  }
}

export default Modal;



