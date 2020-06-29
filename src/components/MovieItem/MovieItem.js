import React, { Component } from 'react';
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";


class MovieItem extends Component {

  toDetails = () => {
    this.props.dispatch({ type: 'SET_CURRENT_ID', payload: this.props.movieItem.id });
    this.props.dispatch({ type: 'FETCH_DETAIL', payload: this.props.movieItem.id });
    this.props.dispatch({ type: 'FETCH_CURRENT_MOVIE', payload: this.props.movieItem.id });
    window.setTimeout(this.move, 250);
  }
  move = () => {
    this.props.history.push('/Details') // temp 
  }
  render() {
    return (
        <Grid item xs={6} sm={3}>
        <p>{this.props.movieItem.title}</p>
        <div className="MovieItem">
          <img src={this.props.movieItem.poster} alt={this.props.movieItem.title} onClick={this.toDetails}/>
        </div>
      </Grid>
    )
  }
}

export default withRouter(connect()(MovieItem));