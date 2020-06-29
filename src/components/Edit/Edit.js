import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';



class Edit extends Component {
  state = {
    updatedMovie: {
      newTitle: '',
      newDescription: '',
      currentId: this.props.currentId,
    }
  }
    
  
handleChangeFor = (propertyName, event) => {
    this.setState({
      updatedMovie: {
        ...this.state.updatedMovie,
        [propertyName]: event.target.value
      }
    })
  }


  submitInfo = (event) => {

    this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updatedMovie });
    this.setState({
      updatedMovie: {
        newTitle: "",
        newDescription: '',
      }
    });
  };


  render() {
    return (
      <div>
        <p>New movie title name:</p>
        <form onSubmit={this.submitInfo}>
          <input
            type="text"
            required
            placeholder="New Title"
            onChange={(event) => this.handleChangeFor('newTitle', event)}
          />
          <br />
          <p>New movie description:</p>
          <input
            type="text"
            required
            placeholder="New Description"
            onChange={(event) => this.handleChangeFor('newDescription', event)}
          />
          <br />
          <button type="submit">Save</button>
          
        </form>

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
export default connect(mapStateToProps)(Edit);