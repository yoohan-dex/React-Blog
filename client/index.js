import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import storeCreator from './store';
import { selectLocationState } from './containers/App/selectors';
import appSaga from './containers/App/sagas';

import './globalStyles/font.css';
import './globalStyles/index.scss';
const initialState = {};
const store = storeCreator(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});
store.runSaga(appSaga);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>

, document.getElementById('app'));
