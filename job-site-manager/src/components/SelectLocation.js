import React from 'react';
import CreateLocation from './CreateLocation';
import { selectLocation } from '../actions';
import { connect } from 'react-redux';
import MapContainer from './MapContainer'



class SelectLocation extends React.Component {
  state = {
    createLocation: false,
    locationId: null
  }

  listLocations = () => {
    return this.props.company.locations.map(location => {
      return <option value={location.id} key={location.id} >{`${location.address}`}</option>
    })
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.selectLocation("locations", this.state.locationId)
  }

  showCreateLocation = (e) => {
    this.setState({
      createLocation: true
    })
  }

  render(){

    return(
      <React.Fragment>
        <div>
          <MapContainer location={this.props.geoLocation} />
        </div>
        <div>
          <form onSubmit={ this.handleSubmit } >
            <p><label>Select Location: </label>
              <select required name="locationId"
                onChange={this.handleChange }>
                <option value="" disabled selected hidden>Select your option</option>
                { this.listLocations() }
              </select>
              <input type="submit" value="Select Location" />

            </p>
          </form>
          <p>OR</p>
          <p><button onClick={ this.showCreateLocation }>"Create New Location"</button></p>
        </div>
        {this.state.createLocation && <CreateLocation geoLocation={this.props.geoLocation} company={this.props.company} />}

      </React.Fragment>


    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    selectLocation : (route, id) => dispatch(selectLocation(route, id))
  }
}

export default connect(null, mapDispatchToProps)(SelectLocation)
