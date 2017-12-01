import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { login } from '../actions/authActions';

class LoginContainer extends Component {
  render() {
    return (
      <div className="LoginContainer">
        <input ref={(username) => {
          this.usernameInput = username;
        }} />
        <input ref={(password) => {
          this.passwordInput = password;
        }} />
        <button onClick={() => {
          this.props.login({
            usernameInput: this.usernameInput.value,
            passwordInput: this.passwordInput.value
          });
        }}>
          Login
        </button>
        <ul>
          <li><Link to="/register">Sign up</Link></li>
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
    login: login
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
