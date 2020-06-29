import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class MovieItem extends Component {
  // removeItem = () => {
  //   this.props.dispatch({ type: 'DELETE_FRUIT', payload: this.props.basketItem.id });
  // }

  render() {
    return (
      <div>
        <p>{this.props.movieItem.title}</p>
        <img src={this.props.movieItem.poster} alt={this.props.movieItem.title} />
      </div>
    )
  }
}

export default connect()(MovieItem);