import React from 'react';
// import LogInButton from './LogInButton'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {


  render(){
    return(
      <div id="nav-bar">
        This is the navbar
        <Link to="/login">Log In</Link>
      </div>
    );
  }
}

export default NavBar
