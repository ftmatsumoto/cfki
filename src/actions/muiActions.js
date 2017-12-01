import { CHANGE_SIDEBAR, CLOSE_SIDEBAR, OPEN_EVENT_DIALOG, CLOSE_EVENT_DIALOG } from './actionTypes';

export function changeSidebar(open) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SIDEBAR,
      change: open
    });
  }
}

export function closeSidebar() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_SIDEBAR,
    });
  }
}

export function openEventDialog() {
  return (dispatch) => {
    dispatch({
      type: OPEN_EVENT_DIALOG
    });
  }
}

export function closeEventDialog() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_EVENT_DIALOG
    });
  }
}
