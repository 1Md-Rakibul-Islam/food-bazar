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
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("orders", OrderSchema)
export default OrderModel;
