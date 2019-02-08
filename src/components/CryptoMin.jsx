import React from 'react';
import PropTypes from 'prop-types';
import styles from './CryptoMin.module.css';

export default class Crypto extends React.Component {
  renderCryptoMin() {
    const { currencies } = this.props;
    return (
      Object.keys(currencies).map(currency => (
        <div className={styles.root} key={currencies[currency].id}>
          <div className={styles.name}>
            <img className={styles.icon} src={currencies[currency].icon} alt=""/>
            <div>
              <p className={styles.short_name}>{currencies[currency].shortName}</p>
              <p className={styles.fullname}>{currencies[currency].fullName}</p>
            </div>
          </div>
          <div className={styles.amount}>
            <p className={styles.amount_crypto}>{currencies[currency].amountCrypto}</p>
            {currencies[currency].changePtc24hDisplay > 0
              ? <p className={styles.amount_percents_profit}>
                  +{currencies[currency].changePtc24hDisplay}%
                </p>
              : <p className={styles.amount_percents_loss}>
                {currencies[currency].changePtc24hDisplay}%
                </p>
            }
          </div>
        </div>
      ))
    );
  }

  render = () => (this.props.currencies.BTC ? this.renderCryptoMin() : null);
}

Crypto.propTypes = {
  currencies: PropTypes.object,
};
