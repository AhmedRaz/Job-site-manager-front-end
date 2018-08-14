import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { getCompanyJobs } from '../actions'

class MainContainer extends React.Component {


  render(){
    console.log(this.props);
    return(
      <div>

        <img src='https://4.bp.blogspot.com/-BGO5H1Kkbuk/Vrw9moTGlXI/AAAAAAAAGX4/heinrNagxKo/s400/under%2Bconstruction.jpg' />
        <Switch>

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
