import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CryptoRate.module.css';
import CryptoMin from '../containers/CryptoMin';
import leftArrow from '../icons/left-arrow.png';
import btc from '../icons/btc.png';

export default class MainScreen extends React.Component {
  render() {
    // eslint-disable-next-line no-empty-pattern
    const {} = this.props;

    return (
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
            <img className={styles.icon} src={btc} alt=""/>
            <div>
              <p className={styles.short_name}>BTC</p>
              <p className={styles.fullname}>Bitcoin</p>
            </div>
          </div>
          <div className={styles.amount}>
            <p className={styles.amount_crypto}>0.241234523</p>
            <p className={styles.amount_profit}>+2.75%</p>
          </div>
          </div>
      </div>
    );
  }
}

MainScreen.propTypes = {
  events: PropTypes.array,
};
