import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


// Component Imports:
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <MovieList />
        <Route exact path='/Details' component={Details} />
      </div>
      </Router>
    );
  }
}

export default App;
