import React from 'react';
import { connect } from 'react-redux';
import EventDetail from './EventDetail';
import { closeEvent } from '../actions'

class RightSideBar extends React.Component {

  renderJobImages = () => {
    return this.props.job.images.map(image => {
      return <img className="image-tag" src={image.image_data} alt={`${image.image_name}`} key={`image-${image.id}`}  />
    })
  }

  renderIfNoImage = () => {
    if (this.props.jobImage){
    return  <div className="image-tag"> <img src={this.props.jobImage.image_data} alt=""/> </div>
    } else {
      return null
    }
  }

  render(){
    return(
      <div id="right-side-bar">
        <div className="images-container">
          {this.props.job && this.props.job.images.length > 0 ? this.renderJobImages(): this.renderIfNoImage() }
        </div>
        {this.props.selectedEvent ? <EventDetail event={this.props.selectedEvent} /> : <div></div>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeEvent: () => (dispatch(closeEvent()))
  }
}
const mapStateToProps = (state) => {
  return {
    selectedEvent: state.jobState.selectedEvent,
    jobImage: state.jobState.jobImage,
    job: state.jobState.job
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar)
