import { connect } from 'react-redux';
import Component from '../components/Chart';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      historicalData: state.historicalData,
      activePeriod: state.activePeriod,
      activeCurrency: state.activeCurrency,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
