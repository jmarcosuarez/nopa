import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import bank from './bank';

export default combineReducers({
  user,
  bank,
  routing: routerReducer,
});
