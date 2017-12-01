import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginGoogle } from '../actions/authActions';
import { withRouter } from 'react-router-dom';

class LoginGoogle extends Component {

  render() {
    return (
      <div className="LoginGoogle">
        <button onClick={() => {
          this.props.loginGoogle();
        }}>
          Google
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginGoogle: loginGoogle
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginGoogle));
