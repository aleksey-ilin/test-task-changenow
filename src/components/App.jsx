import React from 'react';
import styles from './App.module.css';
// import MainScreen from './MainScreen';
import CryptoRate from './CryptoRate';

const App = () => (
  <div className={styles.app}>
    <CryptoRate />
  </div>
);

export default App;
