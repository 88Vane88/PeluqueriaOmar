import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.get('/get',getProducts);

productRoutes.post('/create',createProduct);

productRoutes.put('/update/:id',updateProduct);

productRoutes.delete('/delete/:id',deleteProduct);

export default productRoutes;