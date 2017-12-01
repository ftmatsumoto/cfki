import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { cyan500 } from 'material-ui/styles/colors';

import App from './App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: cyan500,
  // },
  // appBar: {
  //   height: 50,
  // },
});

const Root = ({ store }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </MuiThemeProvider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;