import { connect } from 'react-redux';
import Component from '../components/CryptoRate';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      currencies: state.currencies,
      activeCurrency: state.activeCurrency,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
