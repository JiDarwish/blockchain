import React, { Component } from 'react'
import trainTracksImgNone from '../images/train-tracks.png'
import trainTracksImgAB from '../images/train-tracks-ab.png'
import trainTracksImgBC from '../images/train-tracks-bc.png'
import trainTracksImgCA from '../images/train-tracks-ca.png'
import '../styles/map.css';

function getTrainTracksImg(state) {
  switch(state) {
    case "none":
      return trainTracksImgNone;
    case "AB":
      return trainTracksImgAB;
    case "BC":
      return trainTracksImgBC;
    case "CA":
      return trainTracksImgCA; 
  }
}

export default class Map extends Component {
  render() {
    return (
      <div className="train-map-container">
        <img src={getTrainTracksImg(this.props.trackState)} />
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