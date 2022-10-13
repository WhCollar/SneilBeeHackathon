import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import shopReducer from './shop/reducer';
import newsReducer from './news/reducer';
import appReducer from './app/reducer';

export default combineReducers({
  user: userReducer,
  shop: shopReducer,
  news: newsReducer,
  app: appReducer,
});
