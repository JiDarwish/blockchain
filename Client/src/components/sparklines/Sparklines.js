import React, { Component } from 'react'
import SparkLineChart from './SparklineChart';

export default class Sparklines extends Component {
  getSparklinePoints = () => {
    const temperature = [];
    const pressure = [];
    const humidity = [];
    this.props.data.forEach(item => {
      temperature.push(item.temperature);
      pressure.push(item.pressure);
      humidity.push(item.humidity);
    })
    return {
      temperature,
      pressure,
      humidity
    }
  }

  render() {
    const { temperature, pressure, humidity } = this.getSparklinePoints();
    console.log(temperature, pressure, humidity);
    return (
      <div className="Sparklines">
        <SparkLineChart data={temperature} type="Temperature" />
        <SparkLineChart data={pressure} type="Pressure" />
        <SparkLineChart data={humidity} type="Humidity" />
      </div>
    )
  }
}
