import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Template from '../layout/Template'
import { compose } from 'redux'
import Navbar from '../layout/Navbar';
import SideBar from '../layout/SideBar';
import { firestoreConnect } from 'react-redux-firebase'


class Dashboard extends Component {
  render() {

    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <Template>
      <SideBar/>

      <div className="right_container">
      <Navbar /> 
      <div className="common_space">
        <div className="dashboard">
        <h1 className="dashboard_heading">dashboard</h1>

      <div className="content">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>



        </div>

        </div>
        </div>
      </Template>
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
