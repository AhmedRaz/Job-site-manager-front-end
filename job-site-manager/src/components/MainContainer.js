import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getCompanyJobs, getLocation } from '../actions';
import JobDetail from './JobDetail';
import CreateJobFormContainer from './CreateJobFormContainer';


class MainContainer extends React.Component {

  state = {
    geoLocation: {}
  }
  currentLocation = (resolve, reject) => {
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

            resolve(pos);
          return pos;

        })
   }else {
       reject("reject");
   }
 }

 p = new Promise(this.currentLocation)

componentDidMount() {
  this.p.then((pos)=>{
    this.setState({
      geoLocation : pos
    }, () => this.props.getLocation(this.state.geoLocation))
  })
}


  render(){
    return(
      <div>

        <img className="image-tag" src={`${this.props.company.logo_src}`} alt=""/>
        <Switch>
           {this.props.companyJobs && <Route path="/main/jobs/:id" render={(routerProps) => {
             const job = this.props.companyJobs.find((job) => {
               return job.id === parseInt(routerProps.match.params.id, 10)
             })
             return <JobDetail job={job}  />
           }} />}

           <Route path="/main/create_job" component={ CreateJobFormContainer } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    company: state.companyState.company,
    companyJobs: state.jobState.companyJobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyJobs : (route, filter, search_param) => dispatch(getCompanyJobs(route, filter, search_param)),
    getLocation : (pos) => dispatch(getLocation(pos))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer))
