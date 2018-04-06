import React, { Component } from 'react'
import '../styles/table.css'

export default class Table extends Component {
  render() {
    return (
      <body>
      <div>
      <div className="container">
        <table>
          <thead>
            <tr>
            <div className="row">
              <th>Date and Time</th>
              <th>Company</th>
              <th>Status</th>
              <th>Alert</th>
              </div>
            </tr>
          </thead>
          <tbody>
            <tr>
            <div className="row">
              <td>2017-03-29 14:12</td>
              <td>A</td>
              <td>Warning</td>
              <td>Temperature has been too high</td>
              </div>
            </tr>
            <tr>
            <div className="row">
              <td>2017-03-29 15:12</td>
              <td>B</td>
              <td>Info</td>
              <td>Train arrived on time</td>
              </div>
            </tr>
            <tr>
            <div className="row">
              <td>2017-03-29 16:12</td>
              <td>C</td>
              <td>Test</td>
              <td>checkbox</td>
              </div>
            </tr>
            <tr>
            <div className="row">
              <td>2017-03-29 14:12</td>
              <td>A</td>
              <td>Warning</td>
              <td>Red Dot</td>
              </div>
            </tr>
             <tr>
             <div className="row">
              <td>2017-03-29 15:12</td>
              <td>B</td>
              <td>Info</td>
              <td>Checkbox unchecked</td>
              </div>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      </body>
    )
  }
}
