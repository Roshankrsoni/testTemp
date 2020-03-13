import produce from 'immer';
import {
  GET_MENU_LIST,
  GET_MENU_LIST_ERROR,
  GET_MENU_LIST_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  error: false,
  loading: false,
  menuData: {}
};

/* eslint-disable default-case, no-param-reassign */
const menuListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MENU_LIST:
        draft.loading = false;
        draft.error = null;
        break;
      case GET_MENU_LIST_SUCCESS:
        draft.error = null;
        draft.loading = false;
        draft.menuData = action.data;
        break;

      case GET_MENU_LIST_ERROR:
        draft.error = action.error;
        draft.loading = false;
      default:
        return draft;
    }
  });

export default menuListReducer;
