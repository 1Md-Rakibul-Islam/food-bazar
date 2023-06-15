import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
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

const ProductModel = mongoose.model("products", ProductSchema);
export default ProductModel;

// "productTitle": "Black Coffee",
// "image": "https://i.ibb.co/s150R2K/product1.jpg",
// "discription": "Black coffee is a popular beverage that is made from roasted coffee beans and hot water, without any additional ingredients such as milk or sugar. It is often enjoyed for its bold and bitter flavor, as well as its energizing effects due to the caffeine content. Black coffee is a versatile drink that can be served hot or cold, and it can be enjoyed at any time of day. Whether you're starting your morning off with a strong cup of coffee, or you're enjoying an afternoon pick-me-up, black coffee is a classic and timeless choice.",
// "price": "200"
