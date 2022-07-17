import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {categoriesSlice, productsSlice} from './slice';
const reducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
