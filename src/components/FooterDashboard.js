import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import './FooterDashboard.css';

class FooterDashboard extends Component {
  render() {
    return (
      <div className="FooterDashboard">
        <div className="FooterText">
          2017 &copy; CFKI
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterDashboard));

