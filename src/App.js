import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false
    }
  }
  render() {
    const { isAnimating } = this.state
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
        <div className="animations">
          <div className="square my-animation">This text</div>
          <div>
            <div className={isAnimating ? "square my-animation" : "square"}></div>
            <button onClick={() => this.setState({isAnimating: ! isAnimating})}>Animate me! ...Please</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
