import React, { Component } from 'react'
import SparkLineChart from './SparklineChart';

export default class Sparklines extends Component {
  renderSparklines = () => {
    return this.props.data.map(setData => (
      <SparkLineChart key={setData} data={setData} />
    ))
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {this.renderSparklines()}
      </div>
    )
  }
}
