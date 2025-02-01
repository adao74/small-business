import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listingsReducer from './listingsReducer';
import mapReducer from './mapReducer';

export default combineReducers({
  user: userReducer,
  listings: listingsReducer,
  map: mapReducer
}); 