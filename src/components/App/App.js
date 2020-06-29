import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
