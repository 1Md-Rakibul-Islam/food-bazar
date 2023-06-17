import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("orders", OrderSchema)
export default OrderModel;