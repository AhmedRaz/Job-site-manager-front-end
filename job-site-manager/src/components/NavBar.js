import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions'

class NavBar extends React.Component {


  render(){
    return(
      <div id="nav-bar">
        <div className="item">
          <h1>Job Site Manager</h1>
        </div>
      { this.props.currentUserExists && (<div className="item">
        <h2>Welcome To { this.props.user.company.name }</h2>
      </div>) }
        { this.props.currentUserExists ?
          <a href="" className= "item" onClick={this.props.logOut} >Log Out </a>
          :
          <React.Fragment>
            <Link className= "item" to="/login">Log In</Link>
            <Link className= "item" to="/signup">Sign Up</Link>
          </React.Fragment>
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    currentUserExists: state.userState.currentUserExists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut : () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
