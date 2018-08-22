import React from 'react';
import { connect } from 'react-redux';
import { closeEvent, assignUserToEvent, editEvent, updateUserEvents } from '../actions';

class EventDetail extends React.Component {

  state ={
    showUserAssign: false,
    showEditForm: false,
    assignedUserId: null,
    event_details: "",
    resolved: null,
    image_source: []
  }

  componentDidMount() {
    this.setState({
      event_details: this.props.event.event_details,
      resolved: this.props.event.resolved
    })
  }

  renderEventImages = () => {
    return this.props.event.image_source.map(image => {
      return <img className="image-tag" src={`${image}`} alt="" />
    })
  }

  showUserAssignForm = () => {
    this.setState((previousState) => {
      return {
        showUserAssign : !previousState.showUserAssign
      }
    })
  }

  showEditEventForm = () => {
    this.setState((previousState) => {
      return {
        showEditForm : !previousState.showEditForm
      }
    })
  }

  listUsers = () => {
    return this.props.companyUsers.map(user => {
      return <option value={user.id} key={user.id} >{`${user.first_name} ${user.last_name}`}</option>
    })
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAssignSubmit = (e) => {
    e.preventDefault();

    this.props.assignUserToEvent("events", this.props.event.id, {user_id: this.state.assignedUserId})
    if( parseInt(this.state.assignedUserId, 10) === this.props.user.id){

      this.props.updateUserEvents(this.props.event)
    }
    this.showUserAssignForm();
  }

  handleEditSubmit = (e) => {
    e.preventDefault();
    this.props.editEvent("events", this.props.event.id, {event_details: this.state.event_details})
    this.showEditEventForm();
  }

  handleResolveSubmit = () => {
    let eventResolved = this.state.resolved
    this.props.editEvent("events", this.props.event.id, {resolved: !eventResolved})
    this.setState(previousState => {
      return{
        resolved: !previousState.resolved
      }
    })
  }

  userAssignForm = () => {

    return (
      <div>
        <form onSubmit={ this.handleAssignSubmit }>
          <p><label>User: </label>
            <select required name="assignedUserId"
              onChange={ this.handleChange }>
              <option value="" disabled selected hidden>Select your option</option>
              { this.listUsers() }
            </select>
            <span className="validity"></span>
            <input type="submit" value="Save" />
          </p>
        </form>
      </div>
    )
  }

  editEventForm = () => {

    return (
      <div>
        <form onSubmit={ this.handleEditSubmit }>
          <p>
            <label>Event Details: </label>
            <input type="text"
              name="event_details"
              value={this.state.event_details}
              onChange={this.handleChange} />
              <input type="submit" value="Save" />
          </p>

        </form>
      </div>
    )
  }

  render(){
    return(
      <div>
        <fieldset className="job-details">
          <legend><span>Event Details   </span>
            <span><button className="close-button" onClick={() => this.props.closeEvent() } >
              <img src="http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/16/Close-2-icon.png" alt="Close"/>
            </button></span>
          </legend>

          <p>Name: {`${this.props.event.event_name}`}</p>
          <p>Type: {`${this.props.event.event_type}`}</p>
          <p>Structure: {`${this.props.event.event_struct}`}</p>
          <p>Details: {`${this.props.event.event_details}`}</p>
          <p>Assigned To: {this.props.event.user ? `${this.props.event.user.first_name} ${this.props.event.user.last_name}` : "Unassigned"}</p>
          <p>Resolved: {`${this.props.event.resolved}`}</p>
          <p><button onClick={this.showUserAssignForm}>Assign Tech</button></p>
          {this.state.showUserAssign && this.userAssignForm() }
          <p><button onClick={this.showEditEventForm}>Edit Details</button></p>
          {this.state.showEditForm && this.editEventForm() }
          {this.props.event.user && <p><button onClick={this.handleResolveSubmit}>Resolve?</button></p>}
          {/* <button className="close-button" onClick={() => this.props.closeEvent() } >
            <img src="http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/16/Close-2-icon.png" alt="Close"/>
          </button> */}
        </fieldset>
        {this.props.event.image_source ? <div className="images-container">
          { this.renderEventImages() }
        </div> :
        ""
        }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeEvent: () => (dispatch(closeEvent())),
    assignUserToEvent: (route, event_id, user_id) => dispatch(assignUserToEvent(route, event_id, user_id)),
    editEvent: (route, event_id, body) => dispatch(editEvent(route, event_id, body)),
    updateUserEvents: (event) => dispatch(updateUserEvents(event))
  }
}

const mapStateToProps = (state) => {
  return {
    companyUsers: state.companyState.companyUsers,
    user: state.userState.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)
