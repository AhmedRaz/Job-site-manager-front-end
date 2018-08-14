import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions'

class LogInForm extends React.Component {
  state = {
    email_address: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.email_address, this.state.password)
  }

  handleChange = (e)=> {
    e.persist();
    this.setState(
      {
        [e.target.name]: e.target.value
      })
  }

  render(){
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Log In</legend>
              <p ><label>E-mail Address: </label>
              <input type="email" name="email_address" value={this.state.email_address} onChange={this.handleChange} /></p>
              <p><label>Password: </label>
              <input type="password" name="password" onChange={this.handleChange} /></p>
              <p><input type="submit" value="Log In" /></p>
           </fieldset>
        </form>
        {
          this.props.error && <p style={ {color:"red"} }> Login Failed. Please try again. </p>
        }
      </div>
    );
  }
}

const mapDispatchToProps  = (dispatch) => {
  return {
    loginUser : (email, password) => dispatch(loginUser(email, password))
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.userState.error,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)
