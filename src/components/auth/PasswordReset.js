import React, { Component } from 'react'
import { connect } from 'react-redux'
import { passwordreset } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Template from '../layout/Template'

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
      <Template>
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            
            <h5 className="grey-text text-darken-3">Password Reset</h5>
            
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Reset Password</button>
            </div>

            {authError && <p style={{ color: 'red', fontWeight: 'bold'}}>{authError}</p>}

          </form>
        </div>
      </Template>
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
