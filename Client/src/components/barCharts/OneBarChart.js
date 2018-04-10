import React, { Component } from 'react'
import { BarChart } from 'react-easy-chart';
import image from '../../images/loader.gif';

export default class OneBarChart extends Component {
  render() {
    if (!this.props.data) {
      return <img src={image} alt="Loading" />
    }
    const { A, B, C } = this.props.data;

    return (
      <div className="singleChartContainer">
        <span>{this.props.dataType}</span>
        <div className="barsContainer" >
          <div>
            <BarChart
              data={[
                { x: 'A', y: A, color: A > 0 ? 'red' : A > 3 ? 'orange' : '#69c956' },
                { x: 'B', y: B },
                { x: 'C', y: C }
              ]}
              width={300}
            />
          </div>
          <div className="dataValues">
            <span>{A} {this.props.unit}</span>
            <span>{B} {this.props.unit}</span>
            <span>{C} {this.props.unit}</span>
          </div>
          <div className="typeBar">
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </div>
        </div>
      </div>
    )
  }
}
