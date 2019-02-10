import { connect } from 'react-redux';
import Component from '../components/MainScreen';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      totalBalance: state.totalBalance,
      totalChangeLast24h: state.totalChangeLast24h,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
