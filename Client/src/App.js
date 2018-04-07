import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/GoogleMap';
import './styles/app.css'
import Sparklines from './components/sparklines/Sparklines';
import Header from './components/Header';
import BarCharts from './components/barCharts/BarCharts';
import { data as trainData } from './fakeData/sparkline';// SHould go away
import * as util from './util';

import { getTrainDataHistory, getTrainStationDataHistory } from './data/library';

getTrainStationDataHistory().then(res => console.error('train station', res));



class App extends Component {
  state = {
    trainData: [],
    stationData: []
  }


  componentDidMount = () => {
    this.trainData = setInterval(() => {
      getTrainDataHistory().then(res => {
        const data = util.getArrayData(res)
        this.setState({ trainData: data });
      })

    }, 1000);
    getTrainStationDataHistory().then(res => {
      const data = util.getArrayData(res)
      console.error(data);
    })
  }



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
          <Sparklines data={this.state.trainData} />
          <BarCharts />
        </div>
      </div>
    );
  }
}

export default App;
