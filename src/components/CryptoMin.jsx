import React from 'react';
import PropTypes from 'prop-types';
import styles from './CryptoMin.module.css';
import btc from '../icons/btc.png';

export default class Crypto extends React.Component {
  state = { rowsPerPage: 10, rowsHeight: 80 };

  // handleChangePage = (event, page) => this.props.changeCurrentPage(page);

  render() {
    // eslint-disable-next-line no-empty-pattern
    const {} = this.props;

    return (
      <div className={styles.root}>
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
    );
  }
}

Crypto.propTypes = {
  events: PropTypes.array,
};
