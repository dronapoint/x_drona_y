import React from 'react'
import Template from '../layout/Template'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from '../layout/Navbar';
import SideBar from '../layout/SideBar';
import { FaSearch } from "react-icons/fa";

class ApiToken extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            keyword: '',
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
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

  componentDidMount() {
    document.body.style = 'background: none #ffffff repeat';
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
                            <div className="fliter_search">
                                {/* <input type="text" placeholder="Filter By Keyword" name="search" value={this.state.search} onChange={this.handleChange}/> */}
                                <input type="text" placeholder="Filter By Keyword" id="search" name="search" value={this.state.search} onChange={this.handleChange}/>
                                <button><FaSearch/></button>
                            </div>
                            <div className="api_tockens">
                                <div className="apl_list">
                                    <h3>Create Token</h3>
                                    <ul>
                                        {/* <li>
                                            <label>Name</label>
                                            <input type="text" placeholder="Filter By Keyword" name="keyword" value={this.state.keyword} onChange={this.handleChange}/>
                                        </li> */}
                                        <li>                                                                <label>Description</label>
                                            <textarea id="keyword" name="keyword" value={this.state.keyword} onChange={this.handleChange}></textarea>
                                        </li>
                                        <li>
                                            <input type="submit" value="Create"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="apl_list">
                                    <h3>Active Tokens</h3>
                                    <ul>
                                        <li>
                                            <p>qwdhwsuryulokxxxjsds</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
