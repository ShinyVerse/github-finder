import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/layout/Users/Users';
import Search from './components/layout/Search/Search';
import Alert from './components/layout/Alert/Alert'
import About from './components/singlePages/About/About'
import User from './components/layout/Users/User';
import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  
  //get users repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=updated-asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 
    setRepos(res.data);
    setLoading(false);
  }

  //get single user
 

  //search github users
 

  // set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }

  return (
    <GithubState>
      <Router>
      <div className="App">
        <Navbar  />
        <div style={{border: 'black solid 1px'}} className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={ props => (
               <Fragment>
                  <Search 
                    setAlert={showAlert} />
                  <Users />
               </Fragment>
              )} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={ props => (
                <User 
                  { ...props } 
                  getUserRepos={getUserRepos}
                  repos={repos}
                  />
                 
              )} />
           </Switch>
          </div>
       </div>
      </Router>
    </GithubState>
  );
}




export default App;
