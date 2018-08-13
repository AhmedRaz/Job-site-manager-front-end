import React from 'react';


class LogInButton extends React.Component {

  handleClick = (e) => {
    console.log("Log In Button");
  }

  render(){
    return(
      <React.Fragment>
        <button type="button" onClick={this.handleClick}>Log In</button>
      </React.Fragment>
    );
  }
}

export default LogInButton
