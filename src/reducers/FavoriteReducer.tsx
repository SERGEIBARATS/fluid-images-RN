import { ADD_ITEM_TO_FAVORITE, DELETE_ITEM_TO_FAVORITE } from '../actions/actionTypes';

const INITIAL_STATE = {
  Favorite: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITE: {
      return { ...state, Favorite: [...state.Favorite, action.payload] };
    }
    case DELETE_ITEM_TO_FAVORITE: {
      return { ...state, Favorite: action.payload };
    }
    default:
      return state;
  }
};

