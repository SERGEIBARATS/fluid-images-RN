import { DefaultRootState } from 'react-redux';
import { ADD_ITEM_TO_FAVORITE, DELETE_ITEM_TO_FAVORITE } from '../actions/actionTypes';

export interface FavoriteReducerState extends DefaultRootState {
  favorite: [],
}

const INITIAL_STATE = {
  favorite: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITE: {
      return { ...state, favorite: [...state.favorite, action.payload] };
    }
    case DELETE_ITEM_TO_FAVORITE: {
      return { ...state, favorite: action.payload };
    }
    default:
      return state;
  }
};

