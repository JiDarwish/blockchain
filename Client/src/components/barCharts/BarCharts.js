import React, { Component } from 'react';
import BarChart from 'react-bar-chart';

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

export default class BarCharts extends Component {
  render() {
    const data = [{ text: 'temp', value: 20 }, { text: 'humid', value: 59 }];
    return (
      <div>
        <BarChart margin={margin} data={data} width={300} height={500} />
      </div>
    )
  }
}
