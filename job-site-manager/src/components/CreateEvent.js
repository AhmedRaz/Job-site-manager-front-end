import React from 'react';
import { connect } from 'react-redux';
import { createEventObject } from '../actions';
import { withRouter } from 'react-router-dom';



class CreateEvent extends React.Component {
  state = {
    eventList: [],
    event_name: "",
    event_details: "",
    event_type: "",
    event_struct: "",
    job_id: this.props.job.id
  }

  resetForm = () =>{
    this.setState({
      event_name: "",
      event_details: "",
      event_type: "",
      event_struct: ""
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

    let eventItem = {
      event_name: this.state.event_name,
      event_details: this.state.event_details,
      event_type: this.state.event_type,
      event_struct: this.state.event_struct,
      job_id: this.state.job_id
    }

    this.setState((previousState) => {
      return {
        eventList: [...previousState.eventList, eventItem]
      }
    }, () => this.resetForm())
  }

  // postEvents = async (resolve, reject) => {
  //   console.log("eventList", this.state.eventList)
  //   this.state.eventList.forEach(event => {
  //     console.log("inside foreach ", event)
  //     await this.props.createEventObject("events", event )
  //     })
  //     resolve("OK")
  //
  // }
  //
  //
  // handleEvents = () => {
  //   const eventPromise = new Promise(this.postEvents)
  //
  //   eventPromise.then((res) => {
  //     console.log("promise hit", res)
  //     this.props.history.push('/main')
  //   })
  // }
  handleEvents = (e) => {
    e.persist();
    this.state.eventList.forEach(event => {
        this.props.createEventObject("events", event )
        })
    this.props.history.push('/main')
  }

  renderEvents = () => {
    return this.state.eventList.map(event => {
      return <li>{`${event.event_name}, ${event.event_struct}, ${event.event_type}`}</li>
    })
  }

  render(){
    return(
      <div>
        <form onSubmit= {this.handleSubmit} >
          <fieldset>
            <legend>Create Event</legend>
            <p>
              <label>Event Name: </label>
              <input type="text"
                name="event_name"
                required
                value={this.state.event_name}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>

            <p>
              <label>Event Type: </label>
              <input type="text"
                name="event_type"
                required
                value={this.state.event_type}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p>
              <label>Event Structure: </label>
              <input type="text"
                name="event_struct"
                required
                value={this.state.event_struct}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p>
              <label>Event Details: </label>
              <input type="text"
                name="event_details"
                required
                value={this.state.event_details}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p><input type="submit" value="Add Event"/></p>
          </fieldset>
        </form>
        {this.state.eventList.length > 0 &&
          <div>
            <ol>
              {this.renderEvents()}
            </ol>
            <p><button onClick={this.handleEvents}>"Save"</button></p>
          </div>

        }
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEventObject : (route, event) => dispatch(createEventObject(route, event))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CreateEvent))
