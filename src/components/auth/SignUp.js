import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';
import Template from '../layout/Template';
import logo from '../../image/logo.png';
import './style.css';


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth } = this.props;
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

                <div className="FormTitle">
                    <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" className="FormField__Input" placeholder="Enter your first name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" className="FormField__Input" placeholder="Enter your last name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>                    

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/signin" className="FormField__Link">I'm already member</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
