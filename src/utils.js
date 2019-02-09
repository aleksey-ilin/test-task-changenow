// eslint-disable-next-line import/prefer-default-export
export const getFormattedResponse = (data, type) => {
  const price = `price${type}`;
  const changePtc24hRaw = `changePtc24h${type}`;
  return Object.keys(data)
    .reduce((acc, currency, id) => ({
      ...acc,
      [currency]: {
        [price]: data[currency].USD.PRICE,
        [changePtc24hRaw]: data[currency].USD.CHANGEPCT24HOUR,
        id,
      },
    }), {});
};

export const mapping = {
  url: {
    day: currency => `https://min-api.cryptocompare.com/data/histohour?fsym=${currency}&tsym=USD&limit=24`,
    week: currency => `https://min-api.cryptocompare.com/data/histoday?fsym=${currency}&tsym=USD&limit=6`,
    month: currency => `https://min-api.cryptocompare.com/data/histoday?fsym=${currency}&tsym=USD&limit=31`,
  },
  formattedResponse: {
    day: resp => resp.map(item => ({ time: `${new Date(item.time * 1000).getHours()}h`, open: item.open })),
    week: resp => resp.map(item => ({ time: new Date(item.time * 1000).toLocaleDateString('ru', { day: 'numeric', month: 'numeric' }), open: item.open })),
    month: resp => resp.map(item => ({ time: new Date(item.time * 1000).toLocaleDateString('ru', { day: 'numeric', month: 'numeric' }), open: item.open })),
  },
};
