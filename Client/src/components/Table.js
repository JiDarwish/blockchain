import React, { Component } from 'react'
import '../styles/table.css'

import image from '../images/loader.gif'

export default class Table extends Component {
  renderTableRows = () => {
    console.log(this.props.data)
    return this.props.data.map(item => {
      console.log(item);
      let state = 'Critical Alert';
      let color = 'red';
      if (item.temperature < 3.0) {
        state = "Warning"
        color = "orange"
      }

      if (item.temperature < 0.0) {
        state = "Good"
        color = "green"
      }
      return (
        <tr key={item.timestamp}>
          <td>{new Date(item.timestamp).toLocaleTimeString()}</td>
          <td style={{ color: color }}>{state}</td>
        </tr>
      )
    })
  }
  render() {
    if (!this.props.data || !this.props.A || !this.props.B || !this.props.C) {
      return <img src={image} alt="loading" style={{ marginLeft: '120px' }} />
    }
    const rows = this.renderTableRows();
    return (
      <div className="table-container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
