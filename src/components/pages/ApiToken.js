import React from 'react'
import Template from '../layout/Template'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from '../layout/Navbar';
import SideBar from '../layout/SideBar';

class ApiToken extends React.Component {
  componentDidMount() {
    document.body.style = 'background: none #ffffff repeat';
  }
  componentWillUnmount() {
    document.body.style = 'background: url(/img/nyk.jpeg) no-repeat; background-size: 100%; background-position: bottom;';
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
      return (
          <Template>
          <SideBar/>

          <div className="right_container">
          <Navbar />
          <div className="common_space">
            <div className="dashboard">
            <h1 className="dashboard_heading">Api Token</h1>

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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ApiToken)
