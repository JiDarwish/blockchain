import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/GoogleMap';
import './styles/app.css'
import Sparklines from './components/sparklines/Sparklines';
import Header from './components/Header';
import BarCharts from './components/barCharts/BarCharts';
import { data as trainData } from './fakeData/sparkline';

import { getTrainDataHistory, getTrainStationDataHistory } from './data/library';
getTrainDataHistory().then(res => console.log(res));

const MAX_TEMP = 30;

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="app-container container">
          <div className="topContainer">
            <div id="mapContainer">
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4i89nRz-1SGc0NlS3LaH_ucuK0En4DkY"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `240px`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <div id="tableContainer">
              <Table />
            </div>
          </div>
          <Sparklines data={trainData} />
          <BarCharts />
        </div>
      </div>
    );
  }
}

export default App;
