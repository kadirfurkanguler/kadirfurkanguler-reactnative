import {createSlice} from '@reduxjs/toolkit';
import {categories} from '../../api';
export const categoires = createSlice({
  name: 'categoires',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [categories.pending]: state => {
      state.isLoading.categoires = true;
    },
    [categories.fulfilled]: (state, action) => {
      state.isLoading.categoires = false;
      state.data = action.payload;
    },
    [categories.rejected]: (state, action) => {
      state.isLoading.categoires = false;
      state.error = action.error;
    },
  },
});
export const {reset} = categoires.actions;
export default categoires.reducer;
