import React, { Component } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/layout/Users/Users';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  />
        <div style={{border: 'black solid 1px'}} className="container">
          <Users />
        </div>

      </div>
    );
  }
}



export default App;