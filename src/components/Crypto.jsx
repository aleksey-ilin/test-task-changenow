import React from 'react';
import PropTypes from 'prop-types';
import styles from './Crypto.module.css';
import btc from '../icons/btc.png';

export default class Crypto extends React.Component {
  state = { rowsPerPage: 10, rowsHeight: 80 };

  // handleChangePage = (event, page) => this.props.changeCurrentPage(page);

  render() {
    // eslint-disable-next-line no-empty-pattern
    const {} = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.top}>
          <div className={styles.top_name}>
            <img className={styles.top_icon} src={btc} alt=""/>
            <div>
              <p className={styles.top_short_name}>BTC</p>
              <p className={styles.top_fullname}>Bitcoin</p>
            </div>
          </div>
          <div className={styles.top_amount}>
            <p className={styles.top_amount_crypto}>0.241234523</p>
            <p className={styles.top_amount_dollars}>$1,238.62</p>
          </div>
        </div>
        <div className={styles.buttom}>
          <div className={styles.buttom_price}>
            <p className={styles.buttom_price_dollars}>$6,752.54</p>
            <p className={styles.buttom_price_description}>Price</p>
          </div>
          <div className={styles.buttom_profit}>
            <p className={styles.buttom_profit_percents}>+2.75%</p>
            <p className={styles.buttom_profit_description}>Profit / Loss</p>
          </div>
        </div>
      </div>
    );
  }
}

Crypto.propTypes = {
  events: PropTypes.array,
};
