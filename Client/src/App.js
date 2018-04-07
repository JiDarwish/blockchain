import React, { Component } from 'react';

import Table from './components/Table';
import Map from './components/GoogleMap';
import './styles/app.css'
import Sparklines from './components/sparklines/Sparklines';
import Header from './components/Header';

import { data } from './fakeData/sparkline';

class App extends Component {
  render() {
    return (
      <div className="background-fill">
        <Header />
        <div className="app-container container">
          <div className="row">
            <div className="col-4">
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4i89nRz-1SGc0NlS3LaH_ucuK0En4DkY"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `240px`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                isMarkerShown
              />
            </div>
            <div className="col-8">
              <Table />
            </div>
          </div>
          <Sparklines data={data} />
        </div>
      </div>
    );
  }
}

export default App;
