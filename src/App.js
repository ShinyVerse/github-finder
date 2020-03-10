import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/layout/Users/Users';
import Search from './components/layout/Search/Search';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
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

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  shouldShowClearBtn = () => {
    return this.state.users.length > 0
  }

  render() {
    const { users, loading} = this.state;
    return (
      <div className="App">
        <Navbar  />
        <div style={{border: 'black solid 1px'}} className="container">
          <Search 
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.shouldShowClearBtn()} />
          <Users 
          loading={loading}
          users={users} />
        </div>

      </div>
    );
  }
}



export default App;
