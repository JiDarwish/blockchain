import React, { Component } from 'react'
import trainTracksImg from '../images/train-tracks.png'
import '../styles/map.css';
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export default class Map extends Component {
  render() {
    return (
      <div className="train-map-container">
        <img src={trainTracksImg} />
        <div className={"pin pin-a pin-" + this.props.pinAState}>
          A
        </div>
        <div className={"pin pin-b pin-" + this.props.pinBState}>
          B
        </div>
        <div className={"pin pin-c pin-" + this.props.pinCState}>
          C
        </div>
      </div>
    )
  }
}