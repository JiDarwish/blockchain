import React, { Component } from 'react'

import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 52.3702, lng: 4.8952 }}
        >
          {this.props.isMarkerShown && <Marker position={{ lat: 52.3702, lng: 4.8952 }} />}
        </GoogleMap>
      </div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map))