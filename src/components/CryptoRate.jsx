import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CryptoRate.module.css';
import CryptoMin from '../containers/CryptoMin';
import Chart from '../containers/Chart';
import leftArrow from '../icons/left-arrow.png';

export default class CryptoRate extends React.Component {
  renderCryptoRate() {
    const { currencies, activeCurrency } = this.props;
    return (
      <>
        <div className={styles.root}>
          <nav className={styles.navbar}>
            <Link to='/'>
              <img className={styles.navbar_item} src={leftArrow} alt=""/>
            </Link>
          </nav>
          <div className={styles.crypto_list}>
            <CryptoMin />
          </div>
          <div className={styles.currentCurrency}>
            <div className={styles.name}>
              <img className={styles.icon} src={currencies[activeCurrency].icon} alt=""/>
              <div>
                <p className={styles.short_name}>{currencies[activeCurrency].shortName}</p>
                <p className={styles.fullname}>{currencies[activeCurrency].fullName}</p>
              </div>
            </div>
            <div className={styles.amount}>
              <p className={styles.amount_crypto}>{currencies[activeCurrency].amountCrypto}</p>
              {currencies[activeCurrency].changePtc24hDisplay > 0
                ? <p className={styles.amount_profit}>
                    +{currencies[activeCurrency].changePtc24hDisplay}%
                  </p>
                : <p className={styles.amount_loss}>
                  {currencies[activeCurrency].changePtc24hDisplay}%
                  </p>
              }
                </div>
            </div>
        </div>
        <Chart />
      </>
    );
  }

  render = () => (this.props.currencies.BTC ? this.renderCryptoRate() : null);
}

CryptoRate.propTypes = {
  currencies: PropTypes.object,
  activeCurrency: PropTypes.string,
};
