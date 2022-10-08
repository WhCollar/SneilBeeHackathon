import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import shopReducer from './shop/reducer';

export default combineReducers({
  user: userReducer,
  shop: shopReducer,
});
