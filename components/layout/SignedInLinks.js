import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import {  MdExitToApp} from "react-icons/md";
import { FaUser,FaAlignRight } from "react-icons/fa";

const SignedInLinks = (props) => {
  return (
    <div className="header">

    <div className="menu-bar"><a href="#"><FaAlignRight /></a></div>

      <ul className="logout-icons">
      <li><a href="#"><FaUser />  {props.profile.initials}</a></li>

        <li><a onClick={props.signOut}>Logout <MdExitToApp /> </a></li>

        {/*<li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
  </NavLink></li>*/}
      </ul>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
