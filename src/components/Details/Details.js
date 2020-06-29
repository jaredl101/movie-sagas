import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Details extends Component {
  componentDidMount = () => {
    // this.props.dispatch({ type: 'SET_CURRENT_ID', payload: this.props.currentId });
    // this.props.dispatch({ type: 'FETCH_DETAIL', payload: this.props.currentId });
    // this.props.dispatch({ type: 'FETCH_CURRENT_MOVIE', payload: this.props.currentId });
  }


  render() {

    //console.log(`Current movie genres: ${this.props.currentMovie}`)
    //console.log(JSON.stringify(this.props.currentMovie[0]));
    // if(this.props.detail.length > 0){
    //   console.log(this.props.currentMovie[0].genres);

    // }

    //JSON.stringify(this.props.currentMovie[0])
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
            <button onClick={() => this.props.history.push('/')}>Back</button>
            <button onClick={() => this.props.history.push('/Edit')}>Edit</button>
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





// {
//   (this.props.detail.length > 0 || this.props.currentMovie.length > 0) ? [
//     < img src={this.props.currentMovie[0].poster} alt={this.props.currentMovie[0].title} />,
//     <p>{this.props.currentMovie[0].title}</p>,
//     <p>{this.props.detail.genres}</p>,
//     <button onClick={() => this.props.history.push('/')}>Back</button>,
//     <button onClick={() => this.props.history.push('/Edit')}>Edit</button>,
//     <p>{this.props.currentMovie[0].description}</p>,
//     <p>Genres:</p>,
//     <p>{this.props.detail[0].genres.map((movie) => {
//       return <p>{movie}</p>;
//     })}
//     </p>

//   ]