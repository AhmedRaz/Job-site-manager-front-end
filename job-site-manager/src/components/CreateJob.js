import React from 'react';
import { connect } from 'react-redux';
import { createJob } from '../actions';
import CreateEvent from './CreateEvent';
import CaptureImage from './CaptureImage';

class CreateJob extends React.Component {
  state = {
    name: "",
    location_id: this.props.locationObject.id,
    company_id: this.props.company.id
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let job = {
      name: this.state.name,
      location_id: this.state.location_id,
      company_id: this.state.company_id
    }
    this.props.createJob("jobs", job);
  }

  render(){
    return(
      <React.Fragment>
        <div>
          <fieldset>
            <legend>Create Job</legend>
            <p>Company: {`${this.props.company.name}`}</p>
            <p>Site Location: </p>
            <p>
              <span>Latitude: {`${this.props.locationObject.latitude}  `}</span>
              <span>Longitude: {`${this.props.locationObject.longitude}`}</span>
            </p>
            <p>{`${this.props.locationObject.address}, ${this.props.locationObject.city}, ${this.props.locationObject.state}`} </p>
            <form onSubmit={ this.handleSubmit } >
              <p>
                <label>Job Name: </label>
                <input required type="text" name="name" value={ this.state.name } onChange={ this.handleChange } />
                <span className="validity"></span>
              </p>
              <p>
                <input type="submit" value="Create Job" />
              </p>
            </form>

          </fieldset>
        </div>
        {(this.props.jobObject && this.props.jobImage === null) && <CaptureImage job={this.props.jobObject} /> }
        { this.props.jobImage && <div> <img src={this.props.jobImage.image_data} alt=""/> </div>}

        {this.props.jobObject && <CreateEvent job={this.props.jobObject} />}
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createJob : (route, job) => dispatch(createJob(route, job))
  }
}

const mapStateToProps = (state) => {
  return {
    jobObject: state.createJobState.jobObject,
    jobImage: state.createJobState.jobImage
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateJob)
