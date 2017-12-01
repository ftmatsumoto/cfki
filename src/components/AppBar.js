import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import { logout } from '../actions/authActions';
import { changeSidebar } from '../actions/muiActions';

class AppBarContainer extends Component {
  render() {
    const { match } = this.props;
    const rightButton = (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem
          primaryText='Editar perfil'
          containerElement={<Link to={`${match.url}/profile`} />}
        />
        <MenuItem
          primaryText='Sign out'
          onClick={() => {
            this.props.logout();
          }}
        />
      </IconMenu>
    );
    return (
      <AppBar
        onLeftIconButtonTouchTap={() => {
          this.props.changeSidebar(true);
        }}
        iconElementRight={rightButton}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatch,
    logout: logout,
    changeSidebar: changeSidebar
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBarContainer));

