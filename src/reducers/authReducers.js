import { LOGIN_ATTEMPT, LOGIN_SUCCESSFUL, LOGIN_ERROR, LOGOUT_ATTEMPT, LOGOUT_SUCCESSFUL, REGISTER_ATTEMPT, REGISTER_ERROR } from '../actions/actionTypes';

let initialState = {
  authenticated: false
}

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ATTEMPT:
      return {
        ...state,
        loadingUser: true
      }
    case REGISTER_ERROR:
      return {
        ...state,
        loadingUser: false,
        error: action.error
      }
    case LOGIN_ATTEMPT:
      return {
        ...state,
        loadingUser: true
      }
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        authenticated: true,
        loadingUser: false,
        error: null,
        email: action.email,
        verified: action.verified,
        token: action.token
      }
    case LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        loadingUser: false,
        error: action.error,
      }
    case LOGOUT_ATTEMPT:
      return {
        ...state,
        loadingUser: true
      }
    case LOGOUT_SUCCESSFUL:
      return {
        ...state,
        authenticated: false,
        loadingUser: false,
        error: null,
        token: null
      }
    default:
      return state
  }
}
