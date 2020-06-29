import React, { Component } from 'react';
import './App.css';

// Component Imports:
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
