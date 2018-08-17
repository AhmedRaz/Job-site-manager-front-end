import React from 'react';


class CreateLocation extends React.Component {

  state ={
    longitude: null,
    latitude: null
  }

  


  render(){
    return(
      <div>
        <fieldset>
          <legend>Location</legend>
          <form onSubmit={}>
            <p>
              <label>Latitude: </label>
              <input type="float"
                name="latitude"
                required
                value={this.state.latitude}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p>
              <label>Longitude: </label>
              <input type="float"
                name="longitude"
                required
                value={this.state.longitude}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
          </form>
        </fieldset>
      </div>
    );
  }
}
