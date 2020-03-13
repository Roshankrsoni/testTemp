/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_PRODUCTS_LIST =
  'app/containers/Customers/ProductList/constants/GET_PRODUCTS_LIST';
export const GET_PRODUCTS_LIST_SUCCESS =
  'app/containers/Customers/ProductList/constants/GET_PRODUCTS_LIST_SUCCESS';
export const GET_PRODUCTS_LIST_ERROR =
  'app/containers/Customers/ProductList/constants/GET_PRODUCTS_LIST_ERROR';
