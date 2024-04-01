import express from 'express';
import {
  getProduct,
  createProduct,
  // deleteProduct,
  // updateProduct,
} from "../controllers/productController.js";
import auth from "../middlewares/auth.js"

import authorize from "../middlewares/authorize.js"

const productRouter = express.Router();

productRouter.get("/", auth, getProduct);

productRouter.post("/", auth, createProduct);

// productRouter.delete("/:id", auth, deleteProduct);

// productRouter.put("/:id", auth, updateProduct);

export default productRouter;