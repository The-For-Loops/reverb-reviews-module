import React from 'react';


class Modal extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="myModal" className={this.props.showModal ? 'openedModal' : 'closedModal'}>

        {/*<!-- Modal content -->*/}
        <div className="modal-content">
          <span className="close" onClick={this.props.toggleModal}>&times;</span>

          <div>
            <span>Sign Up</span> {}
            <span>Log In</span>
          </div>
          <div>
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

            <p>
              <input type="checkbox" checked="true" /> Get the latest news, deals, and promotions via email
            </p>
            <p>
              <input type="checkbox" checked="true" />By clicking Sign Up, I expressly agree to accept Reverb’s Terms of Use and Privacy Policy - REQUIRED
            </p>

          </form>

        </div>

      </div>
    )
  }
}

export default Modal;



