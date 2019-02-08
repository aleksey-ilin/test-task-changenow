import _ from 'lodash';
import btc from './icons/btc.png';
import eth from './icons/eth.png';
import xrp from './icons/xrp.png';

const amountDollarsBTC = _.random(0, 1000);
const amountDollarsETH = _.random(0, 1000);
const amountDollarsXRP = _.random(0, 1000);

export const totalBalance = amountDollarsBTC + amountDollarsETH + amountDollarsXRP;

export const data = {
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
