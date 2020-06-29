import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem.js';
import { connect } from 'react-redux';

// material
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//   },
// }));

// const classes = useStyles();

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <Grid container spacing={3}>
        
        {this.props.movies.map((movieItem) => {
          return (
            <MovieItem key={movieItem.id} movieItem={movieItem} />
          );
        })}
 
      </Grid>
    )
  }
}

// Makes our reducers available in our component
const mapStateToProps = (state) => {
  return {
    movies: state.movies,

  };
};

export default connect(mapStateToProps)(MovieList)