import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/GoogleMap';
import './styles/app.css'
import SparklineChart from './components/SparklineChart';

class App extends Component {
  render() {
    return (
<div className="app-container">
      <div className="flex-container">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4i89nRz-1SGc0NlS3LaH_ucuK0En4DkY"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `230px`, width: `30%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          isMarkerShown
        />
        <Table />
        </div>
        <SparklineChart />
      </div>
    );
  }
}

export default App;
