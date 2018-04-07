import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

import '../../styles/sparklines.css'

export default class SparklineChart extends Component {
  render() {
    return (
      <div className="sparklineContainer">
        <Sparklines className="sparkline" height={100} data={this.props.data} >
          <SparklinesLine color="blue" />
        </Sparklines>
        <span>{this.props.type}</span>
      </div>
    )
  }
}
