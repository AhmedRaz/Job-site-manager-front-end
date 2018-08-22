import React from 'react';
import CreateLocation from './CreateLocation';
import { selectLocation } from '../actions';
import { connect } from 'react-redux';



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
    console.log(this.props.company)
    return(
      <React.Fragment>
        <div>
          <form onSubmit={ this.handleSubmit } >
            <p><label>Location: </label>
              <select required name="locationId"
                onChange={this.handleChange }>
                <option value="" disabled selected hidden>Select your option</option>
                { this.listLocations() }
              </select>
              <input type="submit" value="Select Location" />
              <span className="validity"></span>
            </p>
          </form>
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
