import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getCompanyJobs } from '../actions';
import JobDetail from './JobDetail';
import CreateJobFormContainer from './CreateJobFormContainer';


class MainContainer extends React.Component {


  render(){
    return(
      <div>

        <img className="image-tag" src={`${this.props.company.logo_src}`} alt="https://4.bp.blogspot.com/-BGO5H1Kkbuk/Vrw9moTGlXI/AAAAAAAAGX4/heinrNagxKo/s400/under%2Bconstruction.jpg"/>
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
    getCompanyJobs : (route, filter, search_param) => dispatch(getCompanyJobs(route, filter, search_param))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer))
