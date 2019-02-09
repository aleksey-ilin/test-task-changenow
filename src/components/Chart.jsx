import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import styles from './Chart.module.css';

export default class Chart extends React.Component {
  renderChart() {
    const { historicalData } = this.props;
    // console.log(historicalData);
    return (
      <AreaChart width={360} height={400} data={historicalData} className={styles.root}>
        <CartesianGrid/>
        <XAxis dataKey="time" stroke='#fff' tick={{ fontSize: '10px' }}/>
        <YAxis domain={['auto', 'auto']} stroke='#fff' tick={{ fontSize: '10px' }} tickCount={10} axisLine={false}/>
        <Tooltip/>
        <Area type='monotone' dataKey='open' stroke='#9f72ff' fill='#37334c' />
      </AreaChart>
    );
  }

  render = () => (this.props.historicalData ? this.renderChart() : null);
}

Chart.propTypes = {
  historicalData: PropTypes.array,
};
