import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Details extends Component {
  back = () => {
    this.props.history.push("/");
  }

  edit = () => {
    this.props.history.push("/");
  }

  render() {
    let id = this.props.currentId -1;
    console.log(`Current movie genres: ${this.props.currentMovie[0].genres}`)
    return (
      <div>
        < br/>
        <div className="Details" >
          {/* (condition) ? [return for true] : [return for false]; */}
          
    {(this.props.currentMovie.length > 0) ? [
    < img src={this.props.movies[id].poster} alt={this.props.movies[id].title} /> , 
    <p>{this.props.movies[id].title}</p>,
    <p>{this.props.currentMovie.genres}</p>,
            <button onClick={this.back}>Back</button>,
            <button onClick={this.edit}>Edit</button>,
            <p>{this.props.movies[id].description}</p>
          
          ]
            

    : <p>No movie selected!</p> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,
    currentId: state.currentId,
    movies: state.movies,

  };
};
export default withRouter(connect(mapStateToProps)(Details));
