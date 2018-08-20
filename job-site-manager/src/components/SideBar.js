import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class SideBar extends React.Component {

  renderUserEvents = () => {
    return this.props.user.events.map(event => {
      return <li key={event.id}><a href="">{ `${event.event_name}` }</a></li>
    })
  }

  renderCompanyJobs = () => {
    console.log(this.props.company.jobs)
    return this.props.jobsList.map(job => {
      return <li key={`job-${job.id}`}><Link className="item" to={`/main/jobs/${job.id}`}>{ `${job.name}` }</Link></li>
    })
  }


  render() {
    return(
      <div id="side-bar">
        <div className="side-bar-div">
          <p>Hello, {`${this.props.user.first_name}`}</p>
        </div>
        <div className="side-bar-div">
          <span>Your Events:</span>
          <ul>
            { this.renderUserEvents() }
          </ul>
        </div>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    company: state.companyState.company,
    jobsList: state.jobState.companyJobs,
    user: state.userState.user

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
