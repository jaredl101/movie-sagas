import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";




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

  cancel = (event) => {
    this.props.history.push("/");
  }


  submitInfo = (event) => {

    this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updatedMovie });
    this.setState({
      updatedMovie: {
        newTitle: "",
        newDescription: '',
      }
    });
    this.props.history.push("/Details");

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
          <textarea
            type="text"
            required
            placeholder="New Description"
            rows="4"
            cols="50"
            onChange={(event) => this.handleChangeFor('newDescription', event)}
          />
          <br />
          <button type="submit">Save</button>
          <button onClick={this.cancel}>Cancel</button>
          
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
    currentId: state.currentId,
    movies: state.movies,

  };
};
export default withRouter(connect(mapStateToProps)(Edit));