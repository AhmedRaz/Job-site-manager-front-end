import React from 'react';
import { connect } from 'react-redux';
import MapContainer from './MapContainer';
import CreateLocation from './CreateLocation';
import CreateJob from './CreateJob';


class CreateJobFormContainer extends React.Component {

  render(){
    return(
      <React.Fragment>
        {/* <div className="create-job">
            { this.props.geoLocation && <MapContainer geoLocation={this.props.geoLocation} /> }
        </div> */}
        { (this.props.geoLocation && !this.props.locationObject) && <CreateLocation geoLocation={this.props.geoLocation} /> }
        { (this.props.locationObject && this.props.company) && <CreateJob locationObject={this.props.locationObject} company={this.props.company} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    geoLocation : state.createJobState.location,
    locationObject: state.createJobState.locationObject,
    company: state.createJobState.company
  }
}

export default connect(mapStateToProps)(CreateJobFormContainer)
