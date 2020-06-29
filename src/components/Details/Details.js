import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Details extends Component {
  back = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="Details" >
          <img src={this.props.currentMovie.poster} alt={this.props.currentMovie.title} />
          <br />
          <p>{this.props.currentMovie.title}</p>
          <br />
          <p>{this.props.currentMovie.title}</p>
          <button>Back</button>
          <button>Edit</button>


        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,

  };
};
export default withRouter(connect(mapStateToProps)(Details));