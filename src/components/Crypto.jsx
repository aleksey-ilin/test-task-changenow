import React from 'react';
import PropTypes from 'prop-types';
import styles from './Crypto.module.css';

export default class Crypto extends React.Component {
  renderCrypto() {
    const { currencies } = this.props;
    return (
      Object.keys(currencies).map(currency => (
      <div key={currencies[currency].id} className={styles.root}>
        <div className={styles.top}>
          <div className={styles.top_name}>
            <img className={styles.top_icon} src={currencies[currency].icon} alt=""/>
            <div>
              <p className={styles.top_short_name}>{currencies[currency].shortName}</p>
              <p className={styles.top_fullname}>{currencies[currency].fullName}</p>
            </div>
          </div>
          <div className={styles.top_amount}>
            <p className={styles.top_amount_crypto}>{currencies[currency].amountCrypto}</p>
            <p className={styles.top_amount_dollars}>$ {currencies[currency].amountDollars}</p>
          </div>
        </div>
        <div className={styles.buttom}>
          <div className={styles.buttom_price}>
            <p className={styles.buttom_price_dollars}>{currencies[currency].priceDisplay}</p>
            <p className={styles.buttom_price_description}>Price</p>
          </div>
          <div className={styles.buttom_profit}>
            {currencies[currency].changePtc24hDisplay > 0
              ? <p className={styles.buttom_profit_percents}>
                  +{currencies[currency].changePtc24hDisplay}%
                </p>
              : <p className={styles.buttom_loss_percents}>
                {currencies[currency].changePtc24hDisplay}%
                </p>
            }
            <p className={styles.buttom_profit_description}>Profit / Loss</p>
          </div>
        </div>
      </div>
      ))
    );
  }

  render() {
    const { currencies } = this.props;
    return currencies.BTC ? this.renderCrypto() : null;
  }
}

Crypto.propTypes = {
  currencies: PropTypes.object,
};
