import React, { Component, Fragment } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import { LineChart } from 'react-easy-chart';


export default class SparklineChart extends Component {
  render() {
    console.log(this.props.data);
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
        <span>{this.props.type}</span>
      </div>
    )
  }
}
