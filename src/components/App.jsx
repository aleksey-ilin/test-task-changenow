import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import MainScreen from '../containers/MainScreen';
import CryptoRate from '../containers/CryptoRate';

const App = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainScreen} />
        <Route path='/rate' component={CryptoRate} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
