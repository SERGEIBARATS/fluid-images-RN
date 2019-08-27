import { LOAD_SHOP, SELECTED_ITEM } from './actionTypes';
import shoesArray from '../data/shoesArray.json';

export const loadShopList = () => (dispatch: any) => {
  dispatch({ type: LOAD_SHOP, payload: shoesArray.results });
};

export const selectShoe = (id: number, imageSource: string, title: string, description: string, price: number) => (dispatch: any) => {
  dispatch({ type: SELECTED_ITEM, payload: { id, imageSource, title, description, price } });
};
