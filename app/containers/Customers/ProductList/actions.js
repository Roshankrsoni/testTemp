/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} data
 *
 * @return {object} An action object with a type of GET_PRODUCTS_LIST
 */
export function getProductList(data, page = 1) {
  return {
    type: GET_PRODUCTS_LIST,
    data,
    page
  };
}
export function getProductListSuccess(data) {
  return {
    type: GET_PRODUCTS_LIST_SUCCESS,
    data,
  };
}
export function getProductListError(error) {
  return {
    type: GET_PRODUCTS_LIST_ERROR,
    error,
  };
}
