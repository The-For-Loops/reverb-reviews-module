import React from 'react';
import ReactModalLogin from 'react-modal-login';
import {facebookConfig, googleConfig} from "./social-config.js";


class ModalLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loading: false,
      error: null
    }
  }


  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  onTabsChange() {
    this.setState({
      error: null
    });
  }

  render() {
    return (
      <div>
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            onChange: this.onTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            loginBtn: {
              label: "Log In"
            },
            registerBtn: {
              label: "Sign Up"
            },
            recoverPasswordBtn: {
              label: "Send new password"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: '',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: '',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'First name',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'login',
                name: 'login',
                placeholder: '',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Last name',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'login',
                name: 'login',
                placeholder: '',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: '',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email Confirmation',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: '',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: '',
              }
            ],
            recoverPasswordInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: '',
              },
            ],
          }}
          separator={{
            label: "or"
          }}
          providers={{
            facebook: {
              config: facebookConfig,
              label: "Continue with Facebook"
            },
            google: {
              config: googleConfig,
              label: "Continue with Google"
            }
          }}
        />
        <div className="write-review-text">
          <span>Help another musician by sharing your experience!</span><button className="button-write-review" onClick={() => this.openModal()}>Write a Product Review</button>
        </div>
      </div>
    )
  }
}

export default ModalLogin;

