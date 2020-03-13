/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
// import axios from 'axios';
// import { LOAD_REPOS } from '../../App/constants';
import { GET_HOT_SELLING_PRODUCTS } from './constants';
// import { reposLoaded, repoLoadingError } from '../../App/actions';

import request from '../../../utils/request';
// import { makeSelectUsername } from './selectors';
import { hotSellingProductSuccess, hotSellingProductError } from './actions';

/**
 * Github repos request/response handler
 */
// export function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

/**
 * get hot selling products
 */
export function* getHotSelling() {
  const requestURL = `https://cors-anywhere.herokuapp.com/http://dev-ds.asort.com/m/v1/hotselling`;
  const options = {
    headers: {
      Authorization: 'Basic YWRtaW46cjNAY3RpMG4=',
    },
  };
  try {
    const products = yield call(request, requestURL, options);
    yield put(hotSellingProductSuccess(products.data.cols));
  } catch (error) {
    yield put(hotSellingProductError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
// export function* githubData() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }

export default function* homePageSaga() {
  yield all([
    // takeLatest(LOAD_REPOS, getRepos),
    takeLatest(GET_HOT_SELLING_PRODUCTS, getHotSelling),
  ]);
}
