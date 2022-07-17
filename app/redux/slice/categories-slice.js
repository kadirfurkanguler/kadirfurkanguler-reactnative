import {createSlice} from '@reduxjs/toolkit';
import {categories} from '../../api';
export const category = createSlice({
  name: 'category',
  initialState: {
    isLoading: {},
    error: null,
  },
  reducers: {},
  extraReducers: {
    [categories.pending]: state => {
      state.isLoading.category = true;
    },
    [categories.fulfilled]: (state, action) => {
      state.isLoading.category = false;
      state.data = action.payload;
    },
    [categories.rejected]: (state, action) => {
      state.isLoading.category = false;
      state.error = action.error;
    },
  },
});
export default category.reducer;
