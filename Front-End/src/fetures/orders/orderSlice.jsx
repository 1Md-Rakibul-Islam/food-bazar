import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../../API/productRequest";



// Define an async action to fetch the current user
export const getOrder = createAsyncThunk('getOrder', async (id) => {
  const { data } = await fetchProduct(id);
  console.log(id);
  return data;
});

// Define a slice of the store for the current user
const getOrderSlice = createSlice({
  name: 'getOrder',
  initialState: {
    getOrder: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrder.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default getOrderSlice.reducer;