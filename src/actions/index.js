import { createAction } from 'redux-actions';
import axios from 'axios';
import _ from 'lodash';
import { data, totalBalance } from '../currencies';
import { getFormattedResponse, mapping } from '../utils';

export const fetchPricesRequest = createAction('PRICES_FETCH_REQUEST');
export const fetchPricesSuccess = createAction('PRICES_FETCH_SUCCESS');
export const fetchPricesFailure = createAction('PRICES_FETCH_FAILURE');

export const fetchHistoricalDataRequest = createAction('HISTORICALDATA_FETCH_REQUEST');
export const fetchHistoricalDataSuccess = createAction('HISTORICALDATA_FETCH_SUCCESS');
export const fetchHistoricalDataFailure = createAction('PHISTORICALDATA_FETCH_FAILURE');

export const addTotalBalance = createAction('BALANCE_TOTAL_ADD');
export const addTotalChange24h = createAction('CHANGE24H_TOTAL_ADD');
export const changeActiveCurrency = createAction('CURRENCY_ACTIVE_CHANGE');
export const changeActivePeriod = createAction('PERIOD_ACTIVE_CHANGE');

export const addTotalBalanceToState = () => dispatch => dispatch(addTotalBalance(totalBalance));

export const addTotalChange24hToState = currencies => (dispatch) => {
  const result = Object.keys(currencies)
    .reduce((acc, currency) => (
      acc + currencies[currency].amountDollars * (currencies[currency].changePtc24hRaw / 100)
    ), 0);
  return dispatch(addTotalChange24h(_.round(result, 2)));
};

export const fetchHistoricalData = (currency, period) => async (dispatch) => {
  dispatch(fetchHistoricalDataRequest());
  try {
    const url = mapping.url[period](currency);
    const response = await axios.get(url);
    const result = mapping.formattedResponse[period](response.data.Data);
    dispatch(fetchHistoricalDataSuccess(result));
  } catch (e) {
    console.log(e);
    dispatch(fetchHistoricalDataFailure());
  }
};

export const fetchPrices = () => async (dispatch) => {
  dispatch(fetchPricesRequest());
  try {
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD';
    const response = await axios.get(url);
    const formattedDataRaw = getFormattedResponse(response.data.RAW, 'Raw');
    const formattedDataDisplay = getFormattedResponse(response.data.DISPLAY, 'Display');
    const result = Object.keys(response.data.RAW)
      .reduce((acc, currency) => ({
        ...acc,
        [currency]: {
          ...formattedDataRaw[currency],
          ...formattedDataDisplay[currency],
          amountDollars: data[currency].amountDollars,
          amountCrypto: data[currency].amountCrypto(formattedDataRaw[currency].priceRaw),
          shortName: data[currency].shortName,
          fullName: data[currency].fullName,
          icon: data[currency].icon,
        },
      }), {});

    dispatch(addTotalChange24hToState(result));
    dispatch(fetchPricesSuccess(result));
  } catch (e) {
    console.log(e);
    dispatch(fetchPricesFailure());
  }
};
