import React, { Component } from 'react'
import SparkLineChart from './SparklineChart';

export default class Sparklines extends Component {
  state = {
    temprature: [],
    pressure: [],
    humidity: []
  }

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
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <SparkLineChart data={temperature} />
          <SparkLineChart data={pressure} />
          <SparkLineChart data={humidity} />
        </div>
      </div>
    )
  }
}
