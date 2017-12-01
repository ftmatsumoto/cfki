import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import { openEventDialog, closeEventDialog } from '../actions/muiActions';

class EventsContainer extends Component {
  render() {
    const buttonStyle = {
      margin: 12,
    };

    const dialogStyle = {
      width: '80%',
      maxWidth: '1000px',
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.closeEventDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.closeEventDialog}
      />,
    ];

    return (
      <div className="EventsContainer">
        <div className="CalendarContainer">
          <div className="DayContainer">
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
            <div className="HourComponent">
            </div>
          </div>
        </div>
        <div>
          <RaisedButton label="Novo horário" primary={true} style={buttonStyle} onClick={this.props.openEventDialog} />
          <Dialog
            title="Dialog With Custom Width"
            actions={actions}
            modal={true}
            contentStyle={dialogStyle}
            open={this.props.dialogEventOpen}
          >
            Teste
          </Dialog>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dialogEventOpen: state.mui.dialogEventOpen,
    browser: state.browser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openEventDialog: openEventDialog,
    closeEventDialog: closeEventDialog
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer));
