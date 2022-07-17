import {createSlice} from '@reduxjs/toolkit';
import {products} from '../../api';
export const product = createSlice({
  name: 'product',
  initialState: {
    isLoading: {},
    error: null,
  },
  reducers: {},
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
  },
});
export default product.reducer;
