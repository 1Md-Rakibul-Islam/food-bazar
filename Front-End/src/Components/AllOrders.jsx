import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../fetures/orders/ordersSlice";
import OrderCard from "./OrderCard";
import { fetchOrders, fetchPendingOrders } from "../API/cartRequest";

const AllOrders = () => {
    // const dispatch = useDispatch();
    // const orders = useSelector((state) => state.getOrders.orders);
    // const loading = useSelector((state) => state.getOrders.loading);
  
    // useEffect(() => {
    //   dispatch(getOrders());
    // }, [orders]);
    
    const [orders, setOrders] = useState([])

    useEffect( () => {
        const allOrders = async () => {
            const {data} = await fetchOrders();
            setOrders(data);
        }
        allOrders()
    }, [orders])

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
              <th className="p-3">Invoice #</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Issued</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderCard order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
