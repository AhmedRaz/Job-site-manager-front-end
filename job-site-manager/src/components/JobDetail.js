import React from 'react' ;
import { connect } from 'react-redux';
import { selectEvent, getJobEvents, closeEvent} from '../actions';
import EventDetail from './EventDetail';


class JobDetail extends React.Component {

  componentDidMount() {
    this.updateJobEvents()

  }

  updateJobEvents(){

    // updates the job events for THIS job
    this.props.getJobEvents("events", "job", this.props.job.id)
    this.props.closeEvent()
    // make some fetch that updates State (redux)

  }

  componentDidUpdate(prevProps, prevState) {
    // if this is a different job than the one previously rendered
    if (prevProps.job.id !== this.props.job.id){
      this.updateJobEvents()
    }
    // otherwise do nothing


  }
  renderJobImages = () => {
    return this.props.job.images.map(image => {
      return <img className="image-tag" src={image.image_data} alt={`${image.image_name}`} key={`image-${image.id}`}  />
    })
  }

  renderJobEvents = () => {

    return this.props.jobEvents.map(item => {
      return <li key={`event-${item.id}` }><a onClick= {() => this.handleClick(item.id)} >{`${item.event_name}`}</a></li>
    })
  }

  handleClick = (eventId) => {
    this.props.selectEvent(eventId)
  }

  render(){


      return(
        <div>
          <fieldset className="job-details">
            <legend>Job Details</legend>
            <p>Job: {`${this.props.job.name}`}</p>
            <p>Location: {`${this.props.job.location.address}, ${this.props.job.location.city}, ${this.props.job.location.state}`}</p>
            {this.props.jobEvents && <div>
              <p>Events: {`${this.props.jobEvents.length}`}</p>
              <ul>
                {this.renderJobEvents()}
              </ul>
            </div>}

          </fieldset>
          <div className="images-container">
            {this.props.job.images.length > 0 ? this.renderJobImages(): <div> <img src={this.props.jobImage.image_data} alt=""/> </div>}
          </div>
          {this.props.selectedEvent ? <EventDetail event={this.props.selectedEvent} /> : <div></div>}
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeEvent: () => (dispatch(closeEvent())),
    selectEvent: (event) => dispatch(selectEvent(event)),
    getJobEvents: (route, job, job_id) => dispatch(getJobEvents(route, job, job_id))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.jobState.selectedEvent,
    jobEvents: state.jobState.jobEvents,
    jobImage: state.jobState.jobImage
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobDetail)
