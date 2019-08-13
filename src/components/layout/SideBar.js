import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import { FaBeer } from 'react-icons/fa';
import { MdHome,MdLoyalty,MdMessage,MdPersonPin } from "react-icons/md";


const SideBar = (props) => {
  //in case you need to check Auth or Something
  const { auth, profile } = props;
  if (auth.uid) {
    return (
      <aside className="sidebar">

        <a href="#" className="adminlogo"><strong>Drona</strong> Point</a>

        <ul className="sider_barlist">

        <li> <Link to='/' className="w3-bar-item w3-button"><MdHome /> Home</Link></li>

        <li><Link to='/apitoken' className="w3-bar-item w3-button"><MdLoyalty /> API tokens</Link></li>

        <li> <Link to='/messageboard' className="w3-bar-item w3-button"><MdMessage />  Message Board</Link></li>

        <li><Link to='/support' className="w3-bar-item w3-button"><MdPersonPin /> Support</Link></li>

        </ul>
       
      </aside>
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
