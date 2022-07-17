import {createAsyncThunk, ThunkDispatch} from '@reduxjs/toolkit';
import axios from 'axios';
const API_BASE_URL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/';
axios.defaults.baseURL = API_BASE_URL;
const categories = createAsyncThunk('categories/categories', async () => {
  const url = 'categories';
  const res = await axios.get('categories');
  return res.data;
});
const products = createAsyncThunk('products/products', async data => {
  const res = await axios.get('products');
  return res.data;
});
export {categories, products};
