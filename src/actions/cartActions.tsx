import { ADD_ITEM_TO_BAG, ADD_TOTAL_PRICE } from './actionTypes';

export const addItemToCart = (size: any, price:any, quantity: any, imageSource: any, description: any) => (dispatch: any) => {
  dispatch({ type: ADD_ITEM_TO_BAG, payload: { size, price, imageSource, quantity, description } });
};

export const addTotalPrice = (size: any) => (dispatch: any) => {
  dispatch({ type: ADD_TOTAL_PRICE, payload: size });
};
