import {createAsyncThunk, ThunkDispatch} from '@reduxjs/toolkit';
import axios from 'axios';
const API_BASE_URL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/';
axios.defaults.baseURL = API_BASE_URL;
const categories = createAsyncThunk('categories/categories', async data => {
  const url = data !== undefined ? `categories/${data}` : 'categories';
  const res = await axios.get(url);
  return res.data;
});
const logOut = createAsyncThunk('accountManangment/logOut', async () => {
  const res = await axios.get('logout');
  return res.data;
});

export {categories};
