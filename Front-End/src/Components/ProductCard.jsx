import React from "react";

import { Link } from "react-router-dom";
import { addOrder } from "../API/cartRequest";

const productCard = ({ product }) => {
  const { _id, name, image, description, price } = product;

  const handleAddToCart = () => {
    // console.log('Add to cart');
    const order = {
      status: "pending",
      productId: _id,
      name,
      image,
      description,
      price
    }
    addOrder(order)
  }

  return (
    <div>
      {/* <Link to={`/product/details/${_id}`}> */}
      <div class="backdrop-blur-2xl bg-rose-200 shadow-2xl shadow-teal-300 border rounded-xl border-gray-700">
        <img class="rounded-t-lg w-full md:h-[320px] h-[240px]" src={image} alt="" />
        <div class="p-5">
          <div className="flex gap-x-4 items-center mb-3">
            <span class="text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </span>
            <span class=" text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-300">{price}Tk</span>
          </div>
          <p class="mb-3 font-normal text-gray-700">
            {description?.length > 120
              ? description?.slice(0, 120) + "....."
              : description}
          </p>

          <div className="flex gap-2 justify-center">
            <button onClick={handleAddToCart} class="items-center w-full py-2.5 text-lg font-semibold text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default productCard;
