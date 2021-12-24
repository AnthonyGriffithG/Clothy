import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  form: formReducer,
});
