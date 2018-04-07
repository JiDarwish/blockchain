import React, { Component, Fragment } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'


export default class SparklineChart extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="sparklineContainer">
          <Sparklines className="sparkline" height={100} data={this.props.data} >
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <span>{this.props.type}</span>
      </div>
    )
  }
}
