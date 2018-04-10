import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/Map';
import './styles/app.css'
import Sparklines from './components/sparklines/Sparklines';
import Header from './components/Header';
import BarCharts from './components/barCharts/BarCharts';
import * as util from './util';
import { getTrainDataHistory, getTrainStationDataHistory } from './data/library';
import { InputTrainController } from './components/inputTrainController/inputTrainController';


const A = '0x45f2eb5ca5123dd7dfc708f7181f4fbd73fd3036';
const B = '0x5ab612a4c920610f016c6281bbb577ce0a729b2c';
const C = '0x50a1cec928409a5b6673d86499a42fe80142fae7'


class App extends Component {
  state = {
    trainData: [],
    stationData: [],
    lastData: null,
    last5: null,
    pinAState: 'inactive',
    pinBState: 'inactive',
    pinCState: 'inactive',
    trackState: 'none'
  }

  inputTrainController;

  componentDidMount = () => {
    this.inputTrainController = new InputTrainController(this);

    this.trainData = setInterval(() => {

      getTrainDataHistory().then(res => {
        const data = util.getArrayData(res)
        this.setState({ trainData: data });
        console.log(data);
        const last5 = util.getLast5Data(data);

        this.setState({ last5 });
      })

      getTrainStationDataHistory().then(res => {
        const { pressures, temperatures, humidities } = util.getLastDataForCompanies(A, B, C, res);
        this.setState({
          lastData: {
            temperatures,
            pressures,
            humidities
          }
        })
      })

    }, 2000);
  }



  render() {
    const { pinAState, pinBState, pinCState } = this.state;
    return (
      <div className="root">
        <Header />
        <div className="app-container container">
          <div className="topContainer">
            <div id="mapContainer">
              <Map
                pinAState={pinAState}
                pinBState={pinBState}
                pinCState={pinCState}
                trackState={this.state.trackState} //[AB | BC | CA | none]
              />
            </div>
            <div id="tableContainer">
              <Table data={this.state.last5} A={A} B={B} C={C} />
            </div>
          </div>
          <Sparklines data={this.state.trainData} />
          <BarCharts data={this.state.lastData} />
        </div>
      </div>
    );
  }
}

export default App;
