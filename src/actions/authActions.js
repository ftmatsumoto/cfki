import { auth, googleProvider } from '../firebaseApp';
import { LOGIN_ATTEMPT, LOGIN_ERROR, LOGOUT_ATTEMPT, REGISTER_ATTEMPT, REGISTER_ERROR } from './actionTypes';

export function register(credentials) {
  return (dispatch) => {
    dispatch({
      type: REGISTER_ATTEMPT
    });
    auth.createUserWithEmailAndPassword(credentials.usernameInput, credentials.passwordInput)
      .then((user) => {
        user.sendEmailVerification();
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: REGISTER_ERROR,
          error: err
        })
      });
  }
}

export function login(credentials) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ATTEMPT
    });
    auth.signInWithEmailAndPassword(credentials.usernameInput, credentials.passwordInput)
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGIN_ERROR,
          error: err
        });
      });
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_ATTEMPT
    });
    auth.signOut().then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  }
}

export function loginGoogle() {
  return (dispatch) => {
    if (!auth.currentUser) {
      googleProvider.addScope('profile');
      googleProvider.addScope('email');
      auth.signInWithRedirect(googleProvider);
      // [END signin]
    } else {
      // [START signout]
      auth.signOut();
      // [END signout]
    }
  }
}
