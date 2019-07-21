import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SideBar = (props) => {
  //in case you need to check Auth or Something
  const { auth, profile } = props;
  if (auth.uid) {
    return (
      <div className="w3-sidebar w3-black w3-text-white w3-bar-block" style={{ width: '15%' }}>
          <Link to='/' className="w3-bar-item w3-button">Home</Link>
          <Link to='/apitoken' className="w3-bar-item w3-button">API tokens</Link>
          <Link to='/messageboard' className="w3-bar-item w3-button">Message Board</Link>
          <Link to='/support' className="w3-bar-item w3-button">Support</Link>
      </div>
    )
 }
  else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(SideBar)