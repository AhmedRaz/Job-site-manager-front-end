import React from 'react';
import { connect } from 'react-redux';
import { closeEvent } from '../actions';

class EventDetail extends React.Component {

  renderEventImages = () => {
    return this.props.event.image_source.map(image => {
      return <img className="image-tag" src={`${image}`} alt="" />
    })
  }

  render(){
    return(
      <div>
        <fieldset>
          <legend>Event Details</legend>
          <p>Name: {`${this.props.event.event_name}`}</p>
          <p>Type: {`${this.props.event.event_type}`}</p>
          <p>Structure: {`${this.props.event.event_struct}`}</p>
          <p>Details: {`${this.props.event.event_details}`}</p>
          <p>Assigned To: {this.props.event.user ? `${this.props.user}` : "Unassigned"}</p>
          <p>Resolved: {`${this.props.event.resolved}`}</p>
          <button className="close-button" onClick={() => this.props.closeEvent() } >
            <img src="http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/16/Close-2-icon.png" alt="Close"/>
          </button>
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
    closeEvent: () => (dispatch(closeEvent()))
  }
}

export default connect(null, mapDispatchToProps)(EventDetail)
