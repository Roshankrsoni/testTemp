/**
 * Gets the Menu data
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MENU_LIST } from './constants';
import request from '../../utils/request';
import { getMenuListSuccess, getMenuListError } from './actions';
import { API_BASE_URL } from '../../api_constants';


export function* getMenuListSaga(){
    try {
        const url = API_BASE_URL+'site/topmenu';
        let headOption = {
                method: 'GET'
                }

        const result = yield call(request, url, headOption);
        if (result && result.status == "success") {
            let newMenuConfig = [result.data.topmenu];
             var now = new Date().getTime();
             newMenuConfig.push([{'timeStamp':now}]);
            localStorage.setItem('newMenuConfig',  JSON.stringify(newMenuConfig));
            yield put(getMenuListSuccess(result.data));
          }
    }catch(error){
        yield put(getMenuListError(error));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount

    // Watches for GET_PRODUCTS_LIST actions and calls getProductListSaga when one comes in.
    yield takeLatest(GET_MENU_LIST, getMenuListSaga);
  }
