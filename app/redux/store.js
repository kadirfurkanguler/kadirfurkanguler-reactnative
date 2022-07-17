import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {categoriesSlice} from './slice';
const reducer = combineReducers({
  categories: categoriesSlice,
});
export const store = configureStore({
  reducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
