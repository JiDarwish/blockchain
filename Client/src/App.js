import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/Map';
import './styles/app.css'
import Sparklines from './components/sparklines/Sparklines';
import Header from './components/Header';
import BarCharts from './components/barCharts/BarCharts';
import { data as trainData } from './fakeData/sparkline';
import Model from './components/model/model';

import startSimulation from './components/simulation/simulation';

import { getTrainDataHistory, getTrainStationDataHistory } from './data/library';
getTrainDataHistory().then(res => console.log(res));

const MAX_TEMP = 30;

var model = new Model;
startSimulation(model, 1000);

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="app-container container">
          <div className="topContainer">
            <div id="mapContainer">
              <Map
                pinAState="active"
                pinBState="inactive"
                pinCState="inactive"
                trackState="CA" //[AB | BC | CA | none]
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
