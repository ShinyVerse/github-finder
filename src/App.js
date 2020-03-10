import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/layout/Users/Users';
import Search from './components/layout/Search/Search';
import Alert from './components/layout/Alert/Alert'
import About from './components/singlePages/About/About'
import User from './components/layout/Users/User';

import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  //get single user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 
    this.setState({
      user: res.data,
      loading: false
    })
  }

  //search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 
    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  // set alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    })

    setTimeout(() => {
      this.setState({
        alert: null
      })
    }, 4000);
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  shouldShowClearBtn = () => {
    return this.state.users.length > 0;
  }

  render() {
    const { users, loading, alert, user} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar  />
          <div style={{border: 'black solid 1px'}} className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={ props => (
                 <Fragment>
                    <Search 
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.shouldShowClearBtn()}
                      setAlert={this.setAlert} />
                    <Users 
                    loading={loading}
                    users={users} />
                 </Fragment>
                )} />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render={ props => (
                  <User 
                    { ...props } 
                    getUser={this.getUser} 
                    user={user}
                    loading={loading}/>
                )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
