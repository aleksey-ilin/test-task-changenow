import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const pricesState = handleActions({
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

const historicalDataState = handleActions({
  [actions.fetchHistoricalDataRequest]() {
    return 'requested';
  },
  [actions.fetchHistoricalDataFailure]() {
    return 'failed';
  },
  [actions.fetchHistoricalDataSuccess]() {
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

const activeCurrency = handleActions({
  [actions.changeActiveCurrency](state, { payload }) {
    return payload;
  },
}, 'BTC');

const historicalData = handleActions({
  [actions.fetchHistoricalDataSuccess](state, { payload }) {
    return payload;
  },
}, []);

const activePeriod = handleActions({
  [actions.changeActivePeriod](state, { payload }) {
    return payload;
  },
}, 'day');

export default combineReducers({
  pricesState,
  historicalDataState,
  currencies,
  totalBalance,
  totalChangeLast24h,
  activeCurrency,
  historicalData,
  activePeriod,
});
