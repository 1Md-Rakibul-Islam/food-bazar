import OrderModel from "../Models/OrderModel.js";

// create a order
export const createOrder = async (req, res) => {
  const order = new OrderModel(req.body);
  try {
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all order
export const getOrders = async (req, res) => {
    try {
      const order = await ProductModel.find({});
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  };
