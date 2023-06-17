import { configureStore } from "@reduxjs/toolkit";
import  getOrdersReducer from "./orders/ordersSlice";
import  getOrderReducer from "./orders/orderSlice";

export const store = configureStore({
    reducer: {
        getOrder: getOrderReducer,
        getOrders: getOrdersReducer
    }
})