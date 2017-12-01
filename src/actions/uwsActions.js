import { CLIENT_CONNECT } from './actionTypes';

export function createWSClient(token) {
  // console.log(token);
  const ws = new WebSocket('ws://localhost:8128/' + token);

  return (dispatch) => {
    dispatch({
      type: CLIENT_CONNECT,
      socket: ws
    });
  }
}
