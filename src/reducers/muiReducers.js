import { CHANGE_SIDEBAR, CLOSE_SIDEBAR, OPEN_EVENT_DIALOG, CLOSE_EVENT_DIALOG } from '../actions/actionTypes';

let initialState = {
  sidebarOpen: false
}

export default function muiReducers(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: action.change
      }
    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false
      }
    case OPEN_EVENT_DIALOG:
      return {
        ...state,
        dialogEventOpen: true
      }
    case CLOSE_EVENT_DIALOG:
      return {
        ...state,
        dialogEventOpen: false
      }
    default:
      return state
  }
}

