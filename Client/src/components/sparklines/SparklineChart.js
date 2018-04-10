import React, { Component } from 'react'
import { LineChart } from 'react-easy-chart';


export default class SparklineChart extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="sparklineContainer">
          <LineChart
            axes
            width={300}
            height={200}
            interpolate={'cardinal'}
            data={[
              this.props.data
            ]}
          />

        </div>
        <span>{this.props.type} {this.props.unit}</span>
      </div>
    )
  }
}
