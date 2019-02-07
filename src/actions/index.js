import { createAction } from 'redux-actions';
// import Routes from 'routes';
import axios from 'axios';
import _ from 'lodash';
import btc from '../icons/btc.png';
import eth from '../icons/eth.png';
import xrp from '../icons/xrp.png';

export const fetchPricesRequest = createAction('PRICES_FETCH_REQUEST');
export const fetchPricesSuccess = createAction('PRICES_FETCH_SUCCESS');
export const fetchPricesFailure = createAction('PRICES_FETCH_FAILURE');

export const addTotalBalance = createAction('BALANCE_TOTAL_ADD');
export const addTotalChange24h = createAction('CHANGE24H_TOTAL_ADD');

const amountDollarsBTC = _.random(0, 1000);
const amountDollarsETH = _.random(0, 1000);
const amountDollarsXRP = _.random(0, 1000);
const totalBalance = amountDollarsBTC + amountDollarsETH + amountDollarsXRP;

export const addTotalBalanceToState = () => dispatch => (
  dispatch(addTotalBalance(new Intl.NumberFormat().format(totalBalance))));

export const addTotalChange24hToState = currencies => (dispatch) => {
  const result = Object.keys(currencies)
    .reduce((acc, currency) => (
      acc + currencies[currency].amountDollars * currencies[currency].changePtc24hRaw
    ), 0);
  return dispatch(addTotalChange24h(_.round(result, 2)));
};

const data = {
  BTC: {
    amountDollars: amountDollarsBTC,
    amountCrypto: price => _.round(amountDollarsBTC / price, 5),
    shortName: 'BTC',
    fullName: 'Bitcoin',
    icon: btc,
  },
  ETH: {
    amountDollars: amountDollarsETH,
    amountCrypto: price => _.round(amountDollarsETH / price, 5),
    shortName: 'ETH',
    fullName: 'Ethereum',
    icon: eth,
  },
  XRP: {
    amountDollars: amountDollarsXRP,
    amountCrypto: price => _.round(amountDollarsXRP / price, 5),
    shortName: 'XRP',
    fullName: 'Ripple',
    icon: xrp,
  },
};

export const fetchPrices = () => async (dispatch) => {
  dispatch(fetchPricesRequest());
  try {
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD';
    const response = await axios.get(url);

    const dataRaw = response.data.RAW;
    const dataDisplay = response.data.DISPLAY;

    const resultRaw = Object.keys(dataRaw)
      .reduce((acc, currency, id) => ({
        ...acc,
        [currency]: {
          priceRaw: dataRaw[currency].USD.PRICE,
          changePtc24hRaw: dataRaw[currency].USD.CHANGEPCT24HOUR,
          id,
        },
      }), {});

    const resultDisplay = Object.keys(dataDisplay)
      .reduce((acc, currency, id) => ({
        ...acc,
        [currency]: {
          priceDisplay: dataDisplay[currency].USD.PRICE,
          changePtc24hDisplay: dataDisplay[currency].USD.CHANGEPCT24HOUR,
          id,
        },
      }), {});

    const result = Object.keys(dataRaw)
      .reduce((acc, currency) => ({
        ...acc,
        [currency]: {
          ...resultRaw[currency],
          ...resultDisplay[currency],
          amountDollars: data[currency].amountDollars,
          amountCrypto: data[currency].amountCrypto(resultRaw[currency].priceRaw),
          shortName: data[currency].shortName,
          fullName: data[currency].fullName,
          icon: data[currency].icon,
        },
      }), {});
    // console.log(result);

    dispatch(addTotalChange24hToState(result));
    dispatch(fetchPricesSuccess(result));
  } catch (e) {
    console.log(e);
    dispatch(fetchPricesFailure());
  }
};
