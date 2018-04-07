import React, { Component, Fragment } from 'react'
import { BarChart } from 'react-easy-chart';

export default class OneBarChart extends Component {
  render() {
    return (
      <div className="singleChartContainer">
        <span>Company {this.props.companyName}</span>
        <div className="barsContainer" >
          <div>
            <BarChart
              data={[
                { x: 'A', y: 20 },
                { x: 'B', y: 30 },
                { x: 'C', y: 40 }
              ]}
              width={300}
            />
          </div>
          <div className="dataValues">
            <span>25 C</span>
            <span>100 Pa</span>
            <span>50%</span>
          </div>
          <div className="typeBar">
            <span>temp</span>
            <span>pressure</span>
            <span>humidity</span>
          </div>
        </div>
      </div>
    )
  }
}
