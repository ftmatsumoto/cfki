import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UsersContainer extends Component {
  render() {
    const { location } = this.props

    return (
      <div className="UsersContainer">
        You are now at {location.pathname}!
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.auth.email
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersContainer));
