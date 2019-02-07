import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainScreen.module.css';
import Crypto from '../containers/Crypto';
import alarm from '../icons/alarm.png';
import search from '../icons/search.png';

export default class MainScreen extends React.Component {
  state = { rowsPerPage: 10, rowsHeight: 80 };

  // handleChangePage = (event, page) => this.props.changeCurrentPage(page);

  render() {
    const { totalBalance, totalChangeLast24h } = this.props;
    return (
      <div className={styles.root}>
        <nav className={styles.navbar}>
          <img className={styles.navbar_item} src={search} alt=""/>
          <img className={styles.navbar_item} src={alarm} alt=""/>
        </nav>
        <div className={styles.balance}>
          <p className={styles.balance_title}>Your total balance</p>
          <p className={styles.balance_dollars}>$ {totalBalance}</p>
          <p className={styles.balance_title}>24h Changes</p>
          {totalChangeLast24h > 0
            ? <p className={styles.balance_changes_profit}>+${totalChangeLast24h} &uarr;</p>
            : <p className={styles.balance_changes_loss}>
                -${Math.abs(totalChangeLast24h)} &darr;
              </p>}
        </div>
        <Crypto />
      </div>
    );
  }
}

MainScreen.propTypes = {
  totalBalance: PropTypes.string,
  totalChangeLast24h: PropTypes.number,
};
