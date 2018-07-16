import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <div className="brand small">
            My Style Site
          </div>
          <div className="menu small">
            Menu
          </div>


          <div className="brand large">
            My Style Site
          </div>
          <div className="menu large">
            About Project Contact
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
