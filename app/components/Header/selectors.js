import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNavHeader = state => state.NavBar || initialState;

const makeSelectMenuData = () =>
  createSelector(
    selectNavHeader,
    state => state.menuData,
  );

  export {makeSelectMenuData};