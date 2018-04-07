import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/Map';
import './styles/app.css'
import Sparklines from './components/sparklines/Sparklines';
import Header from './components/Header';
import BarCharts from './components/barCharts/BarCharts';
import { data as trainData } from './fakeData/sparkline';
import { Model } from './components/model/model';
import * as util from './util';
import { startSimulation } from './components/simulation/simulation';
import { getTrainDataHistory, getTrainStationDataHistory } from './data/library';

getTrainStationDataHistory().then(res => console.error('train station', res));

class App extends Component {
  state = {
    trainData: [],
    stationData: [],
    stationActive: ['inactive', 'inactive', 'inactive']
  }

  renderLoop; //THIS IS A STUPID HACK, I DON"T KNOW HOW REACT WORKS AND I JUST WANT TO RE-RENDER THE PAGE WHENEVER DATA CHANGES, INSTEAD I JUST RENDER EVERY SECOND - Christian
  renderLoop = function(self) {
    self.forceUpdate();
    setTimeout(function() {
     self.renderLoop(self); 
    }, 1000);
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

    let model = new Model();
    startSimulation(model, this.state, 1000);
    this.renderLoop(this);
  }

  

  render() {
    return (
      <div className="root">
        <Header />
        <div className="app-container container">
          <div className="topContainer">
            <div id="mapContainer">
              <Map
                pinAState={this.state.stationActive[0]}
                pinBState={this.state.stationActive[1]}
                pinCState={this.state.stationActive[2]}
                trackState="CA" //[AB | BC | CA | none]
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
