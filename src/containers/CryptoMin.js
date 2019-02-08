import { connect } from 'react-redux';
import Component from '../components/CryptoMin';
import * as actionCreators from '../actions';

const Container = connect(
  state => state,
  actionCreators,
)(Component);

export default Container;
