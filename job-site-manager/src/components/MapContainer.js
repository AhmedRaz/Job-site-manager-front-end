import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  currentLocation = () => {
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
           let pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           }

           return pos;

         })
    }
  }

  render() {

    return (
      <React.Fragment>
         <Map style={ {width: '75%', height: '75%' } }
          google={this.props.google}
          initialCenter={ {lat: 40.7008122, lng: -73.9877989} } zoom={14}>

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
