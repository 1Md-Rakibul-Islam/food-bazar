import ProductModel from "../Models/ProductModel.js";

// add a product
export const createProduct = async (req, res) => {
  const product = new ProductModel(req.body);
  try {
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all products
export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};