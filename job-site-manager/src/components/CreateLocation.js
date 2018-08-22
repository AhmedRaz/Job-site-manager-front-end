import React from 'react';
import { connect } from 'react-redux';
import { createLocation } from '../actions'


class CreateLocation extends React.Component {

  state ={
    longitude: this.props.geoLocation.lng,
    latitude: this.props.geoLocation.lat,
    address: "",
    city: "",
    stateLoc: "NY",
    company_id: this.props.company.id,
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let location = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      address: this.state.address,
      city: this.state.city,
      state: this.state.stateLoc,
      company_id: this.state.company_id
    }
    this.props.createLocation("locations", location);
  }


  render(){
    console.log("in create location", this.state, this.props);
    return(
      <div>
        <fieldset>
          <legend>Location</legend>
          <p>Latitude: {`${this.state.latitude}`}</p>
          <p>Longitude: {`${this.state.longitude}`}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Address: </label>
              <input type="text"
                name="address"
                required
                value={this.state.address}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p>
              <label>City: </label>
              <input type="text"
                name="city"
                required
                value={this.state.city}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p><input type="submit" value="Log Location"/></p>
          </form>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createLocation: (route, location) => dispatch(createLocation(route, location))
  }
}

export default connect(null, mapDispatchToProps)(CreateLocation)
