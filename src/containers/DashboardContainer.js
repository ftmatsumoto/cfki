import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';
import LoggedContainer from './LoggedContainer';
import ProfileContainer from './ProfileContainer';
import UsersContainer from './UsersContainer';
import EventsContainer from './EventsContainer';

import FooterDashboard from '../components/FooterDashboard';
import TitleDashboard from '../components/TitleDashboard';

import './DashboardContainer.css';

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Sidebar />
        <TitleDashboard />
        <div className="DashboardContainer">
          <Route exact path='/dashboard' component={LoggedContainer} />
          <Route path='/dashboard/profile' component={ProfileContainer} />
          <Route path='/dashboard/users' component={UsersContainer} />
          <Route path='/dashboard/horarios' component={EventsContainer} />
        </div>
        <FooterDashboard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    browser: state.browser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));
