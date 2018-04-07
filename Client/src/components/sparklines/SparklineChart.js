import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

import '../../styles/sparkline.css'

export default class SparklineChart extends Component {
  render() {
    return (
      <div className="sparklineContainer">
        <Sparklines className="sparkline" height={100} data={this.props.data} >
          <SparklinesLine color="blue" />
        </Sparklines>
        <span className="maxLine" style={{ top: '20px' }} />
      </div>
    )
  }
}
