import React, { Component, Fragment } from 'react'
import OneBarChart from './OneBarChart';

import '../../styles/barCharts.css'

export default class BarCharts extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="headerCompany">Company's Data</h2>
        <div className="CompanyChartContainer">
          <OneBarChart dataType="Temperatures" unit="C" data={this.props.data ? this.props.data.temperatures : null} />
          <OneBarChart dataType="Pressures" unit="Pa" data={this.props.data ? this.props.data.pressures : null} />
          <OneBarChart dataType="Humidities" unit="%" data={this.props.data ? this.props.data.humidities : null} />
        </div>
      </Fragment>
    )
  }
}
