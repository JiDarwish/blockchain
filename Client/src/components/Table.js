import React, { Component } from 'react'
import '../styles/table.css'

export default class Table extends Component {
  render() {
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
            <tr>
              <td>2017-03-29 14:12</td>
              <td>A</td>
              <td>Warning</td>
              <td>Temperature has been too high</td>
            </tr>
            <tr>
              <td>2017-03-29 15:12</td>
              <td>B</td>
              <td>Info</td>
              <td>Train arrived on time</td>
            </tr>
            <tr>
              <td>2017-03-29 16:12</td>
              <td>C</td>
              <td>Test</td>
              <td>checkbox</td>
            </tr>
            <tr>
              <td>2017-03-29 14:12</td>
              <td>A</td>
              <td>Warning</td>
              <td>Red Dot</td>
            </tr>
            <tr>
              <td>2017-03-29 15:12</td>
              <td>B</td>
              <td>Info</td>
              <td>Checkbox unchecked</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
