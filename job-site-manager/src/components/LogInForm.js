import React from 'react';

class LogInForm extends React.Component {
  state = {
    email_address: "",
    password: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  handleChange = (e)=> {
    e.persist();
    this.setState(
      {
        [e.target.name]: e.target.value
      }, () => console.log(this.state))
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>E-mail Address: </label>
          <input type="email" name="email_address" value={this.state.email_address} onChange={this.handleChange} />
          <label>Password: </label>
          <input type="password" name="password" onChange={this.handleChange} />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default LogInForm
