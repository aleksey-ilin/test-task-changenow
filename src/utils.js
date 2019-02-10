// eslint-disable-next-line import/prefer-default-export
export const getFormattedResponse = (data, type) => {
  const price = `price${type}`;
  const changePtc24h = `changePtc24h${type}`;
  return Object.keys(data)
    .reduce((acc, currency, id) => ({
      ...acc,
      [currency]: {
        [price]: data[currency].USD.PRICE,
        [changePtc24h]: data[currency].USD.CHANGEPCT24HOUR,
        id,
      },
    }), {});
};

const getUrl = (period, limit, currency) => `https://min-api.cryptocompare.com/data/histo${period}?fsym=${currency}&tsym=USD&limit=${limit}`;
const getHour = seconds => `${new Date(seconds * 1000).getHours()}h`;
const getDayMonth = seconds => new Date(seconds * 1000).toLocaleDateString('ru', { day: 'numeric', month: 'numeric' });

export const mapping = {
  url: {
    day: currency => getUrl('hour', 24, currency),
    week: currency => getUrl('day', 6, currency),
    month: currency => getUrl('day', 31, currency),
  },
  formattedResponse: {
    day: resp => resp.map(item => ({ time: getHour(item.time), price: item.open })),
    week: resp => resp.map(item => ({ time: getDayMonth(item.time), price: item.open })),
    month: resp => resp.map(item => ({ time: getDayMonth(item.time), price: item.open })),
  },
};
