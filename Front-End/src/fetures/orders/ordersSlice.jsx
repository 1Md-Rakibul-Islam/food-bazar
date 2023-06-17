import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchOrders, fetchPendingOrders } from "../../API/cartRequest";

export const getOrders = createAsyncThunk("getOrders", async () => {
    const { data } = await fetchPendingOrders();
    return data;
});

const getOrdersSlice = createSlice({
  name: "getOrders",
  initialState: {
    getOrders: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default getOrdersSlice.reducer;
