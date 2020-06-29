import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

import { connect } from 'react-redux';


class MovieItem extends Component {

  toDetails = () => {
    this.props.dispatch({ type: 'SET_CURRENT_ID', payload: this.props.movieItem.id });
    this.props.dispatch({ type: 'FETCH_DETAIL', payload: this.props.movieItem.id });
    this.props.dispatch({ type: 'FETCH_CURRENT_MOVIE', payload: this.props.movieItem.id });
    this.props.history.push("/Details");

  }

  render() {
    return (
      <div>
        <p>{this.props.movieItem.title}</p>
        <div className="MovieItem">
          <img src={this.props.movieItem.poster} alt={this.props.movieItem.title} onClick={this.toDetails}/>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(MovieItem));