import React from 'react';
import { connect } from 'react-redux';

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
    }, () => console.log("inside create job", this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let job = {
      name: this.state.name,
      location_id: this.state.location_id,
      company_id: this.state.company_id
    }
    console.log("inside create job submit",job);
  }

  render(){
    return(
      <div>
        <fieldset>
          <legend>Create Job</legend>
          <p>Company: {`${this.props.company.name}`}</p>
          <p>Site Location: </p>
          <p>
            <span>Latitude: {`${this.props.locationObject.latitude}  `}</span>
            <span>Longitude: {`${this.props.locationObject.longitude}`}</span>
          </p>

        </fieldset>
      </div>
    );
  }
}

export default CreateJob
