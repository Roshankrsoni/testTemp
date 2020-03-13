
import  {GET_MENU_LIST, GET_MENU_LIST_SUCCESS, GET_MENU_LIST_ERROR} from './constants'



export function getMenuList(data, page = 1) {
    return {
      type: GET_MENU_LIST,
      data,
      page
    };
  }
  export function getMenuListSuccess(data) {
    return {
      type: GET_MENU_LIST_SUCCESS,
      data,
    };
  }
  export function getMenuListError(error) {
    return {
      type: GET_MENU_LIST_ERROR,
      error,
    };
  }