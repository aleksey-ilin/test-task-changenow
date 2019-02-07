import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const eventsPricesState = handleActions({
  [actions.fetchPricesRequest]() {
    return 'requested';
  },
  [actions.fetchPricesFailure]() {
    return 'failed';
  },
  [actions.fetchPricesSuccess]() {
    return 'successed';
  },
}, 'none');

const currencies = handleActions({
  [actions.fetchPricesSuccess](state, { payload }) {
    return { ...state, ...payload };
  },
}, {});

const totalBalance = handleActions({
  [actions.addTotalBalance](state, { payload }) {
    return payload;
  },
}, 0);

const totalChangeLast24h = handleActions({
  [actions.addTotalChange24h](state, { payload }) {
    return payload;
  },
}, 0);

export default combineReducers({
  eventsPricesState,
  currencies,
  totalBalance,
  totalChangeLast24h,
});
