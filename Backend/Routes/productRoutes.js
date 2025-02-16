import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../Controllers/productsCn.js";

const productRoutes = express.Router();

productRoutes.route('/').get(getAllProducts).post(createProduct);
productRoutes.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct);

export default productRoutes;