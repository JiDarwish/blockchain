import React, { Component } from 'react'
import '../styles/table.css'

export default class Table extends Component {
  renderTableRows = () => {
    return this.props.data.map(item => (
      <tr key={item.args.timestamp.c[0]}>
        <td>{item.args.timestamp.c[0]}</td>
        <td>{item.args.carrierAddress === this.props.A ? 'A' : item.args.carrierAddress === this.props.B ? 'B' : 'C'}</td>
        <td>a</td>
        <td>a</td>
      </tr>
    ))
  }
  render() {
    if (!this.props.data || !this.props.A || !this.props.B || !this.props.C) {
      return null;
    }
    console.error('Naaaaaa', this.props.data)
    const rows = this.renderTableRows();
    return (
      <div className="table-container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Company</th>
              <th>Status</th>
              <th>Alert</th>
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
