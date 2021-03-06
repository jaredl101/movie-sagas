import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';


// Axios Impot:
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchMovies);
  yield takeEvery('FETCH_DETAIL', fetchDetail);
  yield takeEvery('UPDATE_MOVIE', updateMovie);
  yield takeEvery('FETCH_CURRENT_MOVIE', fetchCurrentMovie);
}

// function to get movies
function* fetchMovies(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get('/api/movie');
    // const result = yield call(axios.get, '/fruit');
    yield put({ type: 'SET_MOVIES', payload: response.data });
  } catch (error) {
    // console.log('Error fetching movies', error);
    alert('unable to get movie from server');
  }
}

// function to get current movie
function* fetchDetail(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/detail/${action.payload}`);
    // const result = yield call(axios.get, '/fruit');
    yield put({ type: 'SET_DETAIL', payload: response.data });
  } catch (error) {
    // console.log('Error fetching fruits', error);
    alert('Unable to get detail from server');
  }
}

// function to get current movie
function* fetchCurrentMovie(action) {
  // wrap it all in try/catch
  // yield axios
  // dispatch the result with put!
  try {
    const response = yield Axios.get(`/api/movie/${action.payload}`);
    // const result = yield call(axios.get, '/fruit');
    yield put({ type: 'SET_CURRENT_MOVIE', payload: response.data });
  } catch (error) {
    // console.log('Error fetching fruits', error);
    alert('Unable to fetch current movie');
  }
}
function* updateMovie(action) {
  //DELETE THE FRUIT
  try {
    yield Axios.put(`/api/movie/${action.payload.currentId}`, action.payload);
    //yield put({ type: 'SET_MOVIE' });
  } catch (error) {
    alert('Unable to update movie on server', error);
  }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the detail of the movie that is selected 
const detail = (state = [], action) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the current movie that is selected
const currentMovie = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_MOVIE':
      return action.payload;
    default:
      return state;
  }
}

const currentId = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_ID':
      return action.payload;
    default:
      return state;
  }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detail,
        currentId,
        currentMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
