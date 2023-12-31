import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../fetures/orders/orderSlice";
import { fetchProduct } from "../API/productRequest";

const OrderCard = ({ order }) => {
  // const dispatch = useDispatch();
  // const orderedProduct = useSelector((state) => state.getOrder.order);
  // const loading = useSelector((state) => state.getOrder.loading);

  // useEffect(() => {
  //   dispatch(getOrder(order?.productId));
  // }, [order?.productId]);

  // // console.log(orderedProduct);

  // if (!orderedProduct) {
  //   return <div>Loading....</div>;
  // }
  // console.log(orderedProduct);

  const { createdAt, description, image, name, price, productId, status, _id } = order;

  // console.log(order);
  return (
    <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
      <td className="p-3">
        <p>{_id}</p>
      </td>
      <td className="p-3">
        <p>{name}</p>
      </td>
      <td className="p-3">
        <p>{createdAt}</p>
        <p className="text-gray-400">Friday</p>
      </td>
      <td className="p-3 text-right">
        <p>${price}</p>
      </td>
      <td className="p-3 text-right">
        <span className="px-3 py-1 font-semibold rounded-md bg-sky-400 text-gray-900">
          <span className="capitalize">{status}</span>
        </span>
      </td>
    </tr>
  );
};

export default OrderCard;
