/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS_LIST } from './constants';
import request from '../../../utils/request';
import { getProductListSuccess, getProductListError } from './actions';
import { SOLR_GET_SEARCH_BASE } from '../../../api_constants';

/**
 * Github repos request/response handler
 */
export function* getProductListSaga({ data = {} }) {
  try {
    const query = data.filters;
    let url = `${SOLR_GET_SEARCH_BASE}category_names=${data.category_name}`;
    if (data.brand_url) {
      url = `${SOLR_GET_SEARCH_BASE}query=${data.category_name}`;
    }
    if (query)
      for (const i in query)  // eslint-disable-line
        if (query[i]) url += `&${i}=${query[i]}`;

    const result = yield call(request, url, { method: 'GET' });
    // Call our request helper (see 'utils/request')

    if (result && result.code == 200) {
      yield put(getProductListSuccess(result));
    }
  } catch (error) {
    yield put(getProductListError(error));
    /*eslint-disable-line*/
  } finally {
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
  yield takeLatest(GET_PRODUCTS_LIST, getProductListSaga);
}
