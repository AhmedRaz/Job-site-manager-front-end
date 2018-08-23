import React from 'react';
import { connect } from 'react-redux';
import SelectLocation from './SelectLocation';
import CreateJob from './CreateJob';
import { closeEvent, resetJob } from '../actions';



class CreateJobFormContainer extends React.Component {

  componentDidMount() {
    this.props.closeEvent()
    this.props.resetJob()
  }

  render(){

    return(
      <React.Fragment>
        { (this.props.geoLocation && !this.props.locationObject) && <SelectLocation geoLocation={this.props.geoLocation} company={this.props.company}/> }
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

const mapDispatchToProps = (dispatch) => {
  return {
    closeEvent: () => (dispatch(closeEvent())),
    resetJob : () => dispatch(resetJob())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobFormContainer)
