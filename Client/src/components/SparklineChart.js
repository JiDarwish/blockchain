import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

import '../styles/sparkline.css'

export default class SparklineChart extends Component {
  render() {
    return (
      <div className="sparklineContainer">
        <Sparklines className="sparkline" height={100} data={[22, 28, 26, 36, 25]} min={20} max={40}>
          <SparklinesLine color="blue" />
        </Sparklines>
        <span className="maxLine" style={{ top: '20px' }} />
      </div>
    )
  }
}
