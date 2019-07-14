import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


class Dashboard extends Component {
  render() {

    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

//not necessary 
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
    auth: state.firebase.auth

  }
}

//revert back to #11
export default connect(mapStateToProps)(Dashboard)