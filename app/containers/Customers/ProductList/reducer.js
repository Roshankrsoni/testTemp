/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  productsData: { list: [], count: 0 },
  filters: {},
  currentPage: 1,
  sorting: {},
  loading: false
};

/* eslint-disable default-case, no-param-reassign */
const productListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCTS_LIST:
        draft.currentPage = action.page;
        draft.loading = true;
        draft.error = null;
        break;
      case GET_PRODUCTS_LIST_SUCCESS:
        const { data = [], filters, sorting } = action.data;
        const { products = [], products_count = 0 } = data[0];

        let mappedProduct;
        let list = products.map((prod, index) => {
          mappedProduct = prod.meta_field.replace(/\\&quot;/g, '"');
          mappedProduct = mappedProduct.replace(/&quot;/g, '"');
          mappedProduct = mappedProduct.substring(1, mappedProduct.length - 1);
          mappedProduct = JSON.parse(mappedProduct);
          return mappedProduct;
        });

        if (draft.currentPage > 1) {
          list = draft.productsData.list.concat(list);
        }
        draft.productsData = {
          list,
          count: products_count,
          canLoadMoreProducts: products_count > list.length ? true : false
        };
        draft.filters = filters;
        draft.error = null;
        draft.loading = false;
        break;

      case GET_PRODUCTS_LIST_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.currentPage = draft.currentPage - 1;
      default:
        return draft;
    }
  });

export default productListReducer;
