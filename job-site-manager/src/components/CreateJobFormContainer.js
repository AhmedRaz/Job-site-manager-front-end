import React from 'react';
import { connect } from 'react-redux';
import MapContainer from './MapContainer';


class CreateJobFormContainer extends React.Component {

  currentLocation = () => {
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
           let pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           }
           console.log("pos", pos)
           return pos;

         })
    }
  }

  render(){
    return(
      <div>
        <MapContainer />
      </div>

    );
  }
}

export default connect()(CreateJobFormContainer)
