import React, { Component } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import UserItem from './components/layout/Users/UserItem';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  />
        <UserItem />
      </div>
    );
  }
}



export default App;
