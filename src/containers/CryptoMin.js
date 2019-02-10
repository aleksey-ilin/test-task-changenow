import { connect } from 'react-redux';
import Component from '../components/CryptoMin';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      currencies: state.currencies,
      activeCurrency: state.activeCurrency,
      activePeriod: state.activePeriod,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
