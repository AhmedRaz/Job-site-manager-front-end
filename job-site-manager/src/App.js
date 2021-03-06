import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getCompanies, logOut, getUser, getCompany } from './actions'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';
import MainContainer from './components/MainContainer';
import RightSideBar from './components/RightSideBar';
import WelcomePage from './components/WelcomePage';

class App extends Component {


  componentDidMount() {
    //retrieves any available companies
    this.props.getCompanies();
    //checks to see if user is logged in via localStorage
    if (localStorage.getItem('token')) {
      //if user token exists, retrieve user data, token is JWT encrypted
      this.props.getUser(localStorage.getItem('token'))
    }

  }

  //conditional to test if user is logged in, and a valid company exists
  propCheck = () => {
    return this.props.currentUserExists && this.props.company
  }




  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ WelcomePage } />

        </Switch>
        <NavBar />
        { this.propCheck() ?
          <SideBar /> : ""
        }
        { this.propCheck() ?
          <RightSideBar /> : ""
        }
        <div className="main-content">
          <Switch>
            {/* <Route exact path="/" render={ () => {
              return (!this.props.currentUserExists ? <Redirect to="/login" /> :
              <MainContainer />)
              }} /> */}

            <Route path="/main" render={ () => {
              return (!this.props.currentUserExists ?  <Redirect to="/login" /> :
              <MainContainer />) } } />

            <Route path="/login" render={ () => {
              return (this.props.currentUserExists ? <Redirect to="/main" />
                : <LogInForm />) } } />


            <Route path="/signup" render={ () => {
              return (this.props.currentUserExists ? <Redirect to="/main" />
                : <SignUpForm />) } } />

            {/* <Redirect to="/404" /> */}

          </Switch>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies : () => dispatch(getCompanies()),
    logOut : () => dispatch(logOut()),
    getUser : (token) => dispatch(getUser(token)),
    getCompany : (route, id) => dispatch(getCompany(route, id))
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserExists: state.userState.currentUserExists,
    user: state.userState.user,
    company: state.companyState.company
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
