import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem.js';
import { connect } from 'react-redux';
// import axios from 'axios';

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <div>
        {this.props.movies.map((movieItem) => {
          return (
            <MovieItem key={movieItem.id} movieItem={movieItem} />
          );
        })}
      </div>
    )
  }
}

// Makes our reducers available in our component
const mapStateToProps = (state) => {
  return {
    movies: state.movies,

  };
};

export default connect(mapStateToProps)(MovieList)