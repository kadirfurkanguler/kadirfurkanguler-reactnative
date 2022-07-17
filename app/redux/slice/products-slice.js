import {createSlice} from '@reduxjs/toolkit';
import {addProduct, products} from '../../api';
export const product = createSlice({
  name: 'product',
  initialState: {
    isLoading: {},
    error: null,
  },
  reducers: {
    reset: state => {
      state.isLoading = {};
      state.error = null;
      state.add_response = undefined;
    },
  },
  extraReducers: {
    [products.pending]: state => {
      state.isLoading.product = true;
    },
    [products.fulfilled]: (state, action) => {
      state.isLoading.product = false;
      state.data = action.payload;
    },
    [products.rejected]: (state, action) => {
      state.isLoading.product = false;
      state.error = action.error;
    },
    [addProduct.pending]: state => {
      state.isLoading.addProduct = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading.addProduct = false;
      state.add_response = action.payload;
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading.addProduct = false;
      state.error = action.error;
    },
  },
});
export const {reset} = product.actions;
export default product.reducer;
