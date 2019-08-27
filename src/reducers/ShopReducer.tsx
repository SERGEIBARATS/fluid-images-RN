import { LOAD_SHOP, SELECTED_ITEM } from '../actions/actionTypes';

const INITIAL_STATE = {
  shop: [],
  selectedItem: {},
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOAD_SHOP: {
      return { ...state, shop: action.payload };
    }
    case SELECTED_ITEM: {
      return { ...state, selectedItem: action.payload };
    }

    default:
      return state;
  }
};
