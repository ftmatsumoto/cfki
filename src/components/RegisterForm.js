import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { register } from '../actions/authActions';

class RegisterContainer extends Component {

  render() {
    return (
      <div className="RegisterContainer">
        <input ref={(username) => {
          this.usernameInput = username;
        }} />
        <input ref={(password) => {
          this.passwordInput = password;
        }} />
        <button onClick={() => {
          this.props.register({
            usernameInput: this.username.value,
            passwordInput: this.password.value
          });
        }}>
          Sign up
        </button>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    register: register
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));
