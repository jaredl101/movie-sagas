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
    return (
      <div>
        < br/>
        <div className="Details" >
          {/* (condition) ? [return for true] : [return for false]; */}
          
    {(this.props.currentMovie.length > 0) ? [
    < img src={this.props.currentMovie[0].poster} alt={this.props.currentMovie[0].title} /> , 
    <p>{this.props.currentMovie[0].title}</p>,
            <button onClick={this.back}>Back</button>,
            <button onClick={this.edit}>Edit</button>,
            <p>{this.props.currentMovie[0].description}</p>
          
          ]
            

    : <p>Nothing</p> }
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

// <br />
//   <p>{this.props.currentMovie[0].title}</p>
//   <br />
//   <p>{this.props.currentMovie[0].description}</p>
//   <button onClick={this.back}>Back</button>
//   <button>Edit</button>