import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';

import './App.css';

import { auth } from '../firebaseApp';
import { LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL } from '../actions/actionTypes';

import PrivateRoute from '../components/PrivateRoute';
import DashboardContainer from './DashboardContainer';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

import { createWSClient } from '../actions/uwsActions';

let unsubscribe;

class App extends Component {
  componentDidMount() {
    const { dispatch, history } = this.props;

    // history.push('/login');
    unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('Auth State Changed');
      if (user) {
        // user is signed in
        user.getIdToken(true).then((idToken) => {
          dispatch({
            type: LOGIN_SUCCESSFUL,
            email: user.email,
            token: idToken,
            verified: user.emailVerified,
          });
          this.props.createWSClient(idToken);
          return idToken;
        })
        .then(() => {
          history.push('/dashboard');
        })
      } else {
        // user is signed out
        history.push('/login');
        dispatch({
          type: LOGOUT_SUCCESSFUL
        });
      }
    });
  }

  componentWillUnmount() {
    unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <Route path="/login" component={LoginForm}/>
        <Route path="/register" component={RegisterForm}/>
        <PrivateRoute path="/dashboard" component={DashboardContainer}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    socket: state.uws.socket
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createWSClient: createWSClient,
    dispatch
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

