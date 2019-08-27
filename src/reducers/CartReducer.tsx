import { ADD_ITEM_TO_BAG, ADD_TOTAL_PRICE } from '../actions/actionTypes';

const INITIAL_STATE = {
  Cart: [],
  totalPrice: 0
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_BAG: {
      return { ...state, Cart: [...state.Cart, action.payload] };
    }
    case ADD_TOTAL_PRICE: {
      return { ...state, totalPrice: (state.totalPrice + action.payload) };
    }
    default:
      return state;
  }
};
