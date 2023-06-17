import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../fetures/orders/ordersSlice";
import OrderCard from "./OrderCard";
import PendingOrderCard from "./PendingOrderCard";

const PendingOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.getOrders.orders);
    const loading = useSelector((state) => state.getOrders.loading);
  
    useEffect(() => {

      dispatch(getOrders());
    }, [orders]);
  
    // if (loading) {
    //   return <div>Loading....</div>;
    // }
  
    // console.log(orders);
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Product Name</th>
              <th className="p-3">Issued</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3"></th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <PendingOrderCard order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingOrders;
