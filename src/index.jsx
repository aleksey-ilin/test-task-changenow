import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import { fetchPrices, addTotalBalanceToState } from './actions';

/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

store.dispatch(addTotalBalanceToState());
store.dispatch(fetchPrices());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
