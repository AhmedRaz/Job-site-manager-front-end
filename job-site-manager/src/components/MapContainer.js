import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import Marker from './Marker';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  state = {
    center: {
      lat: this.props.location.lat,
      lng: this.props.location.lng
    },
    zoom: 15
  };

  showCurrentLocation(map, maps) {
    let marker = new maps.Marker({
      position: this.state.center,
      map,
      title: 'Current Location'
    });
  }

  listLocations = (map,maps) => {
    return this.props.company.locations.map(location => {
       let marker = new maps.Marker({
        position: {lat: location.latitude, lng: location.longitude},
        map,
        title: `${location.address}`
      })
      return marker
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBx8rl3oOLydyLvRyf-X9LLdsPmIuLa9d4" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onGoogleApiLoaded={({map, maps}) => {this.showCurrentLocation(map, maps);this.listLocations(map, maps)}}
          // onGoogleApiLoaded={({map, maps}) => this.listLocations(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <Marker
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={'Current Location'}
          />


        </GoogleMapReact>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentLocation: state.createJobState.location,
    company: state.createJobState.company
  }
}
export default connect(mapStateToProps)(MapContainer);
