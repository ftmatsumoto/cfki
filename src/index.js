import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {responsiveStoreEnhancer} from 'redux-responsive'

import cfReducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root'

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(cfReducers, composeEnhancers(responsiveStoreEnhancer, applyMiddleware(thunk)));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
