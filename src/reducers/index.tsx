import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ShopReducer from './ShopReducer';
import FavoriteReducer from "./FavoriteReducer";

export default combineReducers({
  shop: ShopReducer,
  cart: CartReducer,
  favorite: FavoriteReducer
});
