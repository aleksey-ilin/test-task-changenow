import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import styles from './Chart.module.css';

export default class Chart extends React.Component {
  handleChangeActivePeriod = namePeriod => () => {
    const {
      changeActivePeriod,
      fetchHistoricalData,
      activeCurrency,
      activePeriod,
    } = this.props;
    if (namePeriod !== activePeriod) {
      changeActivePeriod(namePeriod);
      fetchHistoricalData(activeCurrency, namePeriod);
    }
  };

  renderChart() {
    const { historicalData, activePeriod } = this.props;
    return (
      <>
        <div className={styles.periods}>
          <p className={activePeriod === 'day' ? styles.period_active : styles.period} onClick={this.handleChangeActivePeriod('day')}>Day</p>
          <p className={activePeriod === 'week' ? styles.period_active : styles.period} onClick={this.handleChangeActivePeriod('week')}>Week</p>
          <p className={activePeriod === 'month' ? styles.period_active : styles.period} onClick={this.handleChangeActivePeriod('month')}>Month</p>
        </div>
        <AreaChart width={360} height={400} data={historicalData} className={styles.root}>
          <CartesianGrid/>
          <XAxis dataKey="time" stroke='#fff' tick={{ fontSize: '10px' }}/>
          <YAxis domain={['auto', 'auto']} stroke='#fff' tick={{ fontSize: '10px' }} tickCount={10} axisLine={false}/>
          <Tooltip/>
          <Area type='monotone' dataKey='open' stroke='#9f72ff' fill='#37334c' />
        </AreaChart>
      </>
    );
  }

  render = () => (this.props.historicalData ? this.renderChart() : null);
}

Chart.propTypes = {
  historicalData: PropTypes.array,
  activePeriod: PropTypes.string,
  changeActivePeriod: PropTypes.func,
  fetchHistoricalData: PropTypes.func,
  activeCurrency: PropTypes.string,
};
