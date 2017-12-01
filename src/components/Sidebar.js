import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { changeSidebar, closeSidebar } from '../actions/muiActions';

class Sidebar extends Component {
  render() {
    const { match, history } = this.props;

    return (
      <div className="Sidebar">
        <Drawer
          open={this.props.browser.lessThan.medium ? this.props.sidebarOpen : true}
          docked={!this.props.browser.lessThan.medium}
          onRequestChange={
            (open) => {
              this.props.changeSidebar(open);
            }
          }
        >
          <div
            onClick={() => {
              history.push(`${match.url}`);
            }}
            style={{
              height: '64px',
              lineHeight: '64px',
              fontSize: '24px',
              fontWeight: '300',
              backgroundColor: 'rgb(0, 188, 212)',
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              paddingLeft: '24px',
            }}
          >
            CFKI
          </div>
          <MenuItem
            onClick={this.props.closeSidebar}
            containerElement={<Link to={`${match.url}/users`} />}
          >
            Usuários
          </MenuItem>
          <MenuItem
            onClick={this.props.closeSidebar}
            containerElement={<Link to={`${match.url}/horarios`} />}
          >
            Horários
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarOpen: state.mui.sidebarOpen,
    browser: state.browser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeSidebar: changeSidebar,
    closeSidebar: closeSidebar
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
