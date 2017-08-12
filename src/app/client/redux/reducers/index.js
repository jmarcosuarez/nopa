import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bankReducer from './bankReducer';

export default combineReducers({
  bankReducer,
  routing: routerReducer,
});
