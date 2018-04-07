import React, { Component, Fragment } from 'react'
import SparkLineChart from './SparklineChart';

import '../../styles/sparklines.css';

export default class Sparklines extends Component {
  getSparklinePoints = () => {
    const temperature = [];
    const pressure = [];
    const humidity = [];
    if (this.props.data) {
      let i = 1;
      this.props.data.forEach(item => {
        temperature.push({ x: i, y: item.temperature });
        pressure.push({ x: i, y: item.temperature * (Math.random() + 5) * 50 + 105000 });
        humidity.push({ x: i, y: item.humidity + Math.random() * 7 });
        i++;
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
          <SparkLineChart data={temperature} unit="C" type="Temperature" />
          <SparkLineChart data={pressure} unit="Pa" type="Pressure" />
          <SparkLineChart data={humidity} unit="%" type="Humidity" />
        </div>
      </Fragment>
    )
  }
}
