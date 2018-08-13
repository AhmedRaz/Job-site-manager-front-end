import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RestfulAdapter } from "./adapters";
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import LogInForm from './components/LogInForm';

class App extends Component {
  state = {
    images: []
  }

  // componentDidMount() {
  //   RestfulAdapter.indexFetch('images')
  //   .then(data => {
  //     this.setState({
  //       images: data
  //     }, () => console.log(this.state.images))
  //     })
  //   }



  render() {

    return (
      <div className="App">
        <NavBar />
        <SideBar />
        <div className="main-content">
          <Switch>
            <Route path="/login" render={ () => {
              return <LogInForm />} } />
            </Switch>
        </div>

      </div>
    );
  }
}

export default App;
