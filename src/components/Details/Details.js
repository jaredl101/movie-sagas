import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Button } from '@material-ui/core';


class Details extends Component {
  // Details page that loads once a movie poster is clicked.
  render() {

    const { movies, currentMovie, detail, } = this.props;
    return (
      <>

        {/* (condition) ? [return for true] : [return for false]; */}
        {(movies === [] || currentMovie === [] || detail === []) ?
          <>
            {this.props.history.push('/')}
          </>
          : 
          <>
          <br/>
            < img src={currentMovie[0].poster} alt={currentMovie[0].title} />
            <p>{currentMovie[0].title}</p>
            {/* <p>{this.props.detail[0].genres}</p> */}
            <Button variant="contained" color="secondary" size="small" onClick={() => this.props.history.push('/')}>Back</Button>
            <Button variant="contained" color="primary" size="small" onClick={() => this.props.history.push('/Edit')}>Edit</Button>
            <p>{currentMovie[0].description}</p>
            <p>Genres:</p>
            <p>{detail[0].genres.map((genre, i) => <span key={i}>{genre} </span>)}</p>
            {/* <p>{this.props.detail[0].genres.map((movie) => {
              return <p>{movie}</p>;
            })}
            </p> */}

          </>}
       
     </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
    currentId: state.currentId,
    movies: state.movies,
    currentMovie: state.currentMovie,
  };
};
export default withRouter(connect(mapStateToProps)(Details));
