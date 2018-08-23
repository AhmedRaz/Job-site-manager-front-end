import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserEvents } from '../actions';
import bussiness_cat from '../bussiness_cat.png'


class SideBar extends React.Component {

  componentDidMount() {
    this.props.getUserEvents("events", "user", this.props.user.id)
  }

  renderUserEvents = () => {
    return this.props.userEvents.map(event => {
      return <li key={event.id}><Link className="item" to={`/main/jobs/${event.job.id}`}>{ `${event.event_name}` }</Link></li>
    })
  }

  renderCompanyJobs = () => {
    return this.props.jobsList.map(job => {
      return <li key={`job-${job.id}`}><Link className="item" to={`/main/jobs/${job.id}`}>{ `${job.name}` }</Link></li>
    })
  }


  render() {
    return(
      <div id="side-bar">
        <div>
        <div className="side-bar-div">
          <p><h2>Hello, {`${this.props.user.first_name}`}</h2></p>
          {!this.props.user.profile_pic_src === "" ? <img className="image-tag" src={`${this.props.user.profile_pic_src}`} alt="profile"/> :
            <img className="image-tag" src={bussiness_cat} alt=""/>
          }
        </div>
        { this.props.userEvents && <div className="side-bar-div">
          <span>Your Events:</span>
          <ul>
            { this.renderUserEvents() }
          </ul>
        </div> }
        <div className="side-bar-div">
          <p>{`${this.props.company.name}`} Jobs:</p>

          <ul>
            { this.props.company.jobs && this.renderCompanyJobs() }
          </ul>
        </div>
        <div className="side-bar-div" >
          <Link className="item" to="/main/create_job">Create New Job </Link>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    company: state.companyState.company,
    jobsList: state.jobState.companyJobs,
    user: state.userState.user,
    userEvents: state.userState.userEvents

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserEvents: (route, user, user_id) => dispatch(getUserEvents(route, user, user_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
