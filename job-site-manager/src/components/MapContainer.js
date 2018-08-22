import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {


  render() {
    
    return (
      <React.Fragment>
         <Map id="map" style={ {width: '75%', height: '75%' } }
          google={this.props.google}
          initialCenter={ {lat: this.props.geoLocation.lat, lng: this.props.geoLocation.lng} } zoom={14}>

          <Marker onClick={ this.onMarkerClick }
                name={'Current location'} />
          </Map>

      </React.Fragment>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBx8rl3oOLydyLvRyf-X9LLdsPmIuLa9d4")
})(MapContainer)
