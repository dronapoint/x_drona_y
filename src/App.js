import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SideBar from './components/layout/SideBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PasswordReset from './components/auth/PasswordReset';
import ApiToken from './components/pages/ApiToken';
import MessageBoard from './components/pages/MessageBoard';
import Support from './components/pages/Support';
// import './App.css';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div >            
                <Switch>
                    <Route exact path='/'component={Dashboard} />
                    <Route path='/project/:id' component={ProjectDetails} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/passwordreset' component={PasswordReset} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/apitoken' component={ApiToken} />
                    <Route path='/messageboard' component={MessageBoard} />
                    <Route path='/support' component={Support} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
