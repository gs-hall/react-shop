import { createSlice } from '@reduxjs/toolkit';
//import { fetchData } from '../../api/api';

const initialState = {
  value: 0,
  status: 'idle',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectProduct = (state) => state.product.value;

export default productSlice.reducer;
