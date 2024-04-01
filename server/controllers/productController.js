import productModel from "../models/productModel.js";

const createProduct = async (req, res) => {
    const { Name , Price } = req.body;

  const newProduct = new productModel({
    Name: Name,
    Price : Price,
    userId: req.userId,
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

const getProduct = async (req, res) => {
  try {
    const Product = await productModel.find({ userId: req.userId });
    res.status(200).json(Product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export {createProduct, getProduct};