import { ADD_ITEM_TO_FAVORITE, DELETE_ITEM_TO_FAVORITE } from './actionTypes';

export const addItemToFavorite = (size: any, price:any, quantity: any, imageSource: any, description: any) => (dispatch: any) => {
  console.warn('aaaa')
  dispatch({ type: ADD_ITEM_TO_FAVORITE, payload: { size, price, imageSource, quantity, description } });
};

export const deleteItemToFavorite = (favorite: [], index: number) => (dispatch: any) => {
  favorite.splice(index, 1);
  dispatch({ type: DELETE_ITEM_TO_FAVORITE, payload: { favorite} });
};
