import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class MovieItem extends Component {

  toDetails = () => {
    this.props.dispatch({ type: 'DISPLAY_DETAILS', payload: this.props.movieItem.id });
  }

  render() {
    return (
      <div>
        <p>{this.props.movieItem.title}</p>
        <div className="MovieItem" onClick={this.toDetails}>
          <img src={this.props.movieItem.poster} alt={this.props.movieItem.title} />
        </div>
      </div>
    )
  }
}

export default connect()(MovieItem);