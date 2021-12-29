import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
});
