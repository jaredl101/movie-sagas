import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


// Component Imports:
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={MovieList} />
        <Route exact path='/Details' component={Details} />
        <Route exact path='/Edit' component={Edit} />
      </div>
      </Router>
    );
  }
}

export default App;
