import React, { Component } from 'react'
import { connect } from 'react-redux'
import { passwordreset } from '../../store/actions/authActions'
import { Redirect, Link, NavLink } from 'react-router-dom'
import Template from '../layout/Template'
import logo from '../../image/logo.png';

class PasswordReset extends Component {

  state = {
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.passwordreset(this.state);
  }

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to='/' />

    return (

        <div className="App">
            <div className="App__Aside">

            <a href="signin"><img className="logo_img" src={logo} alt="" title=""/></a>

            </div>


            <div className="App__Form">

                {/* <div className="PageSwitcher">
                    <NavLink to="/passwordreset" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Forgot Password</NavLink>
                    <NavLink exact to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                </div> */}
                <div className="login_space_log">
                <div className="FormTitle">
                    <NavLink to="/passwordreset" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Forgot Password</NavLink>
                    or
                    <NavLink exact to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                </div>


                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Password Reset</button> <Link to="/signin" className="FormField__Link">Back to Sign-In</Link>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>

    )
  }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    passwordreset: (creds) => dispatch(passwordreset(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset)
