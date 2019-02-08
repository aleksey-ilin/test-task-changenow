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
