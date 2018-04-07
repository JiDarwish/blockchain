import React, { Component, Fragment } from 'react'
import SparkLineChart from './SparklineChart';

import '../../styles/sparklines.css';

export default class Sparklines extends Component {
  getSparklinePoints = () => {
    const temperature = [];
    const pressure = [];
    const humidity = [];
    if (this.props.data) {
      this.props.data.forEach(item => {
        temperature.push(item.temperature);
        pressure.push(item.pressure);
        humidity.push(item.humidity);
      })
    }

    return {
      temperature,
      pressure,
      humidity
    }
  }

  render() {
    const { temperature, pressure, humidity } = this.getSparklinePoints();
    return (
      <Fragment>
        <h2 className="headerTrain">Train's Data</h2>
        <div className="Sparklines">
          <SparkLineChart data={temperature} type="Temperature" />
          <SparkLineChart data={pressure} type="Pressure" />
          <SparkLineChart data={humidity} type="Humidity" />
        </div>
      </Fragment>
    )
  }
}
