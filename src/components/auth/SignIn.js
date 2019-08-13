import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Template from '../layout/Template';
import logo from '../../image/logo.png';
import './style.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
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

                <div className="PageSwitcher">
                    <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
<div className="login_space_log">
                <div className="FormTitle">
                    <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                    or
                    <NavLink exact to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>


                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                        <NavLink to='/passwordreset' activeClassName="FormTitle__Link--Active" className="Fogot__Link">Forgot Password</NavLink>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
