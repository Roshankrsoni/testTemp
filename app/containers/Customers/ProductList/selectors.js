/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProductPage = state => state.productList || initialState;

const makeSelectProductsData = () =>
  createSelector(
    selectProductPage,
    state => state.productsData,
  );
const makeSelectFiltersData = () =>
  createSelector(
    selectProductPage,
    state => state.filters,
  );
const makeSelectLoading = () =>
  createSelector(
    selectProductPage,
    state => state.loading,
  );
const makeSelectCurrentPage = () =>
  createSelector(
    selectProductPage,
    state => state.currentPage,
  );
export { makeSelectProductsData, makeSelectFiltersData, makeSelectLoading, makeSelectCurrentPage };
