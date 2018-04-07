import React, { Component, Fragment } from 'react'
import { BarChart } from 'react-easy-chart';
import OneBarChart from './OneBarChart';

import '../../styles/barCharts.css'

export default class BarCharts extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="headerCompany">Company's Data</h2>
        <div className="CompanyChartContainer">
          <OneBarChart companyName="A" />
          <OneBarChart companyName="B" />
          <OneBarChart companyName="C" />
        </div>
      </Fragment>
    )
  }
}
