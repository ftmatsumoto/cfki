import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, location, ...rest } = this.props
    // console.log(this.props);
    return (
      <Route {...rest}  render={(props) => {
          return this.props.authenticated ? (
              <Component {...props} />
            ):(
              <Redirect to={{
                pathname: '/login',
                state: { from: location }
              }} />
            )
        }
      } />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
