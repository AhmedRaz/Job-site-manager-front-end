import React from 'react' ;
import { connect } from 'react-redux';
import { selectEvent } from '../actions';
import EventDetail from './EventDetail';


class JobDetail extends React.Component {

  renderJobImages = () => {
    return this.props.job.images.map(image => {
      return <img className="image-tag" src={`data:image/jpeg;base64,${image.image_data}`} alt={`${image.image_name}`} key={`image-${image.id}`}  />
    })
  }

  renderJobEvents = () => {
    return this.props.job.events.map(item => {
      return <li key={`event-${item.id}` }><a onClick= {() => this.handleClick(item.id)} >{`${item.event_name}`}</a></li>
    })
  }

  handleClick = (eventId) => {
    this.props.selectEvent(eventId)
  }

  render(){
    console.log("in job detail, event:", this.props.selectedEvent);
    const job = this.props.job
    return(
      <div>
        <fieldset className="job-details">
          <legend>Job Details</legend>
          <p>Job: {`${job.name}`}</p>
          <p>Location: {`${job.location.address}, ${job.location.city}, ${job.location.state}`}</p>
          <p>Events: {`${job.events.length}`}</p>
          <ul>
            {this.renderJobEvents()}
          </ul>
        </fieldset>
        <div className="images-container">
          {this.renderJobImages()}
        </div>
        {this.props.selectedEvent ? <EventDetail event={this.props.selectedEvent} /> : <div></div>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectEvent: (event) => dispatch(selectEvent(event))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.jobState.selectedEvent
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobDetail)
