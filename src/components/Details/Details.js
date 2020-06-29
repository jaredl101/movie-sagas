import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Details extends Component {
  back = () => {
    this.props.history.push("/");
  }

  edit = () => {
    this.props.history.push("/Edit");
  }

  render() {
    let id = this.props.currentId;
    
    //console.log(`Current movie genres: ${this.props.currentMovie}`)
    //console.log(JSON.stringify(this.props.currentMovie[0]));
    // if(this.props.detail.length > 0){
    //   console.log(this.props.currentMovie[0].genres);
      
    // }
    
    //JSON.stringify(this.props.currentMovie[0])

    return (
      <div>
        < br/>
        <div className="Details" >
          {/* (condition) ? [return for true] : [return for false]; */}
          
    {(this.props.detail.length > 0 ) ? [
    < img src={this.props.currentMovie[0].poster} alt={this.props.currentMovie[0].title} /> , 
    <p>{this.props.currentMovie[0].title}</p>,
    <p>{this.props.detail.genres}</p>,
            <button onClick={this.back}>Back</button>,
            <button onClick={this.edit}>Edit</button>,
            <p>{this.props.movies[id].description}</p>,
            
              <p>{this.props.detail[0].genres.map((movie) => {
                return <p>{movie}</p>;
              })}
              </p>
          
          ]
            

    : <p>No movie selected!</p> }
        </div>
      </div>
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
