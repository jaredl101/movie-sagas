import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { TextField, Button } from '@material-ui/core';





class Edit extends Component {
  // The edit component allows the user to change the title and or description of a movie.
  state = {
    updatedMovie: {
      newTitle: '',
      newDescription: '',
      currentId: this.props.currentId,
    }
  }


  handleChangeFor = (propertyName, event) => {
    // Updates our local state when input is changed
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
    // Updates the information with our current local state

    this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updatedMovie });
    this.setState({
      // clears local state
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
          <TextField
            type="text"
            required
            //placeholder="New Title"
            label="Title"
            onChange={(event) => this.handleChangeFor('newTitle', event)}
          />
          <br />
          <p>New movie description:</p>
          <TextField
            type="text"
            required
            //placeholder="New Description"
            rows="4"
            cols="50"
            label="Description"
            onChange={(event) => this.handleChangeFor('newDescription', event)}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" size="small" type="submit">Save</Button>
          <Button variant="contained" color="secondary" size="small" onClick={this.cancel}>Cancel</Button>

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