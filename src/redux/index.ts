import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/ApiCalls';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';

let middleware = [thunk, promiseMiddleware];

const reduxStore = configureStore({
  rootReducer,
});
