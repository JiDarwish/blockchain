import React, { Component } from 'react'
import SparkLineChart from './SparklineChart';

export default class Sparklines extends Component {
  renderSparklines = () => {
    return this.props.data.map(setData => (
      <div className="col-4">
        <SparkLineChart key={setData} data={setData} />
      </div>
    ))
  }
  render() {
    return (
      <div className="Sparklines">
        <div className="row">
          {this.renderSparklines()}
        </div>
      </div>
    )
  }
}
