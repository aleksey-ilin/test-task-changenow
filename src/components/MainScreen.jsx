import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainScreen.module.css';
import Crypto from './Crypto';
import alarm from '../icons/alarm.png';
import search from '../icons/search.png';

export default class MainScreen extends React.Component {
  state = { rowsPerPage: 10, rowsHeight: 80 };

  // handleChangePage = (event, page) => this.props.changeCurrentPage(page);

  render() {
    // eslint-disable-next-line no-empty-pattern
    const {} = this.props;

    return (
      <div className={styles.root}>
        <nav className={styles.navbar}>
          <img className={styles.navbar_item} src={search} alt=""/>
          <img className={styles.navbar_item} src={alarm} alt=""/>
        </nav>
        <div className={styles.balance}>
          <p className={styles.balance_title}>Your total balance</p>
          <p className={styles.balance_dollars}>$1,632.95</p>
          <p className={styles.balance_title}>24h Changes</p>
          <p className={styles.balance_changes}>+$37.55 &uarr;</p>
        </div>
        <Crypto />
      </div>
    );
  }
}

MainScreen.propTypes = {
  events: PropTypes.array,
};
