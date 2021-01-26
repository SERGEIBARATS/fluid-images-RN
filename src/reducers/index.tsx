import { combineReducers } from 'redux';
import CartReducer, {CartReducerState} from './CartReducer';
import ShopReducer, {ShopReducerState} from './ShopReducer';
import FavoriteReducer, {FavoriteReducerState} from "./FavoriteReducer";

export interface RootState {
  ShopReducer: ShopReducerState
  CartReducer: CartReducerState
  FavoriteReducer: FavoriteReducerState
}

export default combineReducers({
  ShopReducer: ShopReducer,
  CartReducer: CartReducer,
  FavoriteReducer: FavoriteReducer
});
