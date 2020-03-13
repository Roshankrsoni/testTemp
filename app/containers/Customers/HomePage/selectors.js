/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

// const selectHome = state => state.home || initialState;

// const makeSelectUsername = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.username,
//   );

const selectHotSellingProducts = state =>
  state.homePage.hotSellingProduct || initialState;

const makeHotSellingSelector = () =>
  createSelector(
    selectHotSellingProducts,
    hotSellingProduct => hotSellingProduct,
  );

export {
  selectHotSellingProducts,
  makeHotSellingSelector,
  // selectHome, makeSelectUsername
};
