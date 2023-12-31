import OrderModel from "../Models/OrderModel.js";

// create a order
export const createOrder = async (req, res) => {
  const order = new OrderModel(req.body);
  console.log(req.body);
  try {
    await order.save();
    res.status(200).json("Ordered");
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all order
export const getPendingOrders = async (req, res) => {
  try {
      const order = await OrderModel.find({status: 'pending'});
      res.status(200).json(order);

  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrders = async (req, res) => {
  const {status} = req.body;
  // console.log(status);
  try {
      const order = await OrderModel.find({});
      res.status(200).json(order);
    }
   catch (error) {
    res.status(500).json(error);
  }
};

// update a order status
export const updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;
  // console.log("OrderId: ", orderId, "Status:", status);

  try {
    await OrderModel.findByIdAndUpdate(orderId, {
      $set: { status: status },
    });
    res.status(200).json("Post updated!");
  } catch (error) {
    res.status(500).json(error);
  }
};
