import React from 'react'
import Template from '../layout/Template'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class MessageBoard extends React.Component {
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
          <div>
          <p> <b className="text-darken-1"> <h2> Message Board Page </h2> </b> </p>
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

export default connect(mapStateToProps)(MessageBoard)