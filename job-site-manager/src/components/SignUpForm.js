import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions'

class SignUpForm extends React.Component {

  state= {
    first_name: "",
    last_name: "",
    email_address:"",
    telephone:"",
    company_id: null,
    profile_pic_src: "",
    password:"",
    user_level: null
  }

  listCompany = () => {
    return this.props.companies.map(company => {
      return <option value={company.id} key={company.id} >{`${company.designation}`}</option>
    })
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email_address: this.state.email_address,
      telephone: this.state.telephone,
      company_id: this.state.company_id,
      profile_pic_src: this.state.profile_pic_src,
      password: this.state.password,
      user_level: this.state.user_level
    }
    this.props.createUser("users", {user: user});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <p>
              <label>First Name: </label>
              <input type="text"
                name="first_name"
                required
                value={this.state.first_name}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>

            <p>
              <label>Last Name: </label>
              <input type="text"
                name="last_name"
                required
                value={this.state.last_name}
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>
            <p>
              <label>Profile Image URL: </label>
              <input type="text"
                name="profile_pic_src"

                value={this.state.profile_pic_src}
                onChange={this.handleChange} />

            </p>
          </fieldset>

          <fieldset>
            <legend>Contact information</legend>

            <p>
              <label>Email Address: </label>
              <input type="email"
                name="email_address"
                value={this.state.email_address}
                onChange={this.handleChange}
                required />
              <span className="validity"></span>
            </p>

            <p><label>Phone:</label>
            <input type="tel" id="telephone" name="telephone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              value={this.state.telephone}
              onChange={this.handleChange} />
            <span className="validity"></span></p>

          </fieldset>

          <fieldset>
            <legend>Validation</legend>
            <p ><label>Password: </label>
              <input type="password"
                name="password"
                minLength="6"
                placeholder="6 characters minimum"
                required
                onChange={this.handleChange} />
                <span className="validity"></span>
            </p>

            <p><label>Company: </label>
              <select required name="company_id"
                onChange={this.handleChange }>
                <option value="" disabled selected hidden>Select your option</option>
                { this.listCompany() }
              </select>
              <span className="validity"></span>
            </p>

            <p><label>User Level: </label>
              <input type="number" name="user_level"
                required
                min="1" max="3" onChange={this.handleChange} />
               <span className="validity"></span>
            </p>


          </fieldset>
          <fieldset>
            <legend>Submit</legend>
            <p><input type="submit" value="Create User" /></p>

          </fieldset>
        </form>

      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    companies : state.companyState.companies,
    currentUserExists: state.userState.currentUserExists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (route, body) => dispatch(createUser(route, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
