import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>timestamp</th>
              <th>alert</th>
              <th>status</th>
              <th>something</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>time</td>
              <td>time</td>
              <td>time</td>
              <td>time</td>
            </tr>
            <tr>
              <td>alert</td>
              <td>alert</td>
              <td>alert</td>
              <td>alert</td>
            </tr>
            <tr>
              <td>status</td>
              <td>status</td>
              <td>status</td>
              <td>status</td>

            </tr>
            <tr>
              <td>something</td>
              <td>something</td>
              <td>something</td>
              <td>something</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
