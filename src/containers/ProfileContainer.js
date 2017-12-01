import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
  render() {
    return (
      <div className="ProfileContainer">
        Profile Container {this.props.email}!
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));
